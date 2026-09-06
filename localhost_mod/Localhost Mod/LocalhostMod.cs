// v.0.2.46
using System;
using System.Net;
using static System.Net.HttpStatusCode;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
#if UNITY_2017_1_OR_NEWER
using UnityEngine;
using UnityEngine.UI;
#endif

namespace Localhost_Mod
{
    public static class Localhost
    {
        public static readonly string s_DbveDir = "/.d1r.dbv";

        public static string s_CorsOrigin = "https://kaabel.github.io";
        
        private static HttpListener s_listener = new();
        private static Task s_task = new(() => { });

        private static readonly Regex s_UrlEscapeSeqence =
            new Regex("(?:%[a-fA-F0-9]{2})+");

        public static bool IsLive {
            get { return s_listener.IsListening; }
        }
        public static Func<int> PreloadSettings
        {
            get { return SavesManager.PreloadSettings; }
        }

#if UNITY_2017_1_OR_NEWER
        public static void SetupUnityObject()
        {
            GameObject gameObject = GameObject.Find("menu_startlocalhost");
            if (gameObject == null)
            {
                Logging.Warn("I haven't got menu_startlocalhost :(");
                return;
            }
            // v.0.2.45 damn the CSharp line lenghts (due to types verbosity)
            var onClick = gameObject.GetComponent<Button>().onClick;
            onClick.AddListener(delegate { ToggleSetting(gameObject); });

            string localized = Localization.LocalizeText("menu_" +
                (s_listener.IsListening ? "stop" : "start") + "localhost");
            gameObject.GetComponentInChildren<Text>().text = localized;
            Logging.Log("menu_startlocalhost seems successfuly set up");
        }
        public static void ToggleSetting(GameObject gameObject)
        {
            bool turnOn = !s_listener.IsListening;
            if (turnOn) Start();
            else Stop();
            string localized = Localization.LocalizeText("menu_" +
                (s_listener.IsListening ? "stop" : "start") + "localhost");
            gameObject.GetComponentInChildren<Text>().text = localized;
        }
#endif
        public static bool Start()
        {
            if (!HttpListener.IsSupported) return false;

            s_task = AsyncListener();

            return true;
        }
        public static bool Stop()
        {
            try
            {
                s_listener.Stop();
                s_listener.Close();
                s_task.Dispose();
            }
            catch (Exception error)
            {
                Logging.Warn(error);
            }
            return true;
        }
        /// <summary>
        /// Is meant to be ran on the main Unity thread.
        /// </summary>
        private static Task AsyncListener()
        {
            if (s_listener.IsListening) s_listener.Stop();
            s_listener = new HttpListener();

            // entrance points to the Localhost API in Modular Spaceships
            s_listener.Prefixes.Add("http://localhost:5501/Ships/");
            s_listener.Prefixes.Add("http://localhost:5501/.d1r.dbv/");

            s_listener.Start();
            Task<HttpListenerContext> task = s_listener.GetContextAsync();
            task.ContinueWith(RespondAsync);

#if UNITY_2017_1_OR_NEWER
            SavesManager.s_dataPath = UnityEngine.Application.persistentDataPath;
#endif
            return task;
        }
        private static void RespondAsync(Task<HttpListenerContext> task)
        {
            if (task.IsFaulted)
            {
                Logging.Warn("Faulted task, halting localhost.");
                Stop();
                return;
            }
            HttpListenerContext context = task.Result;
            HttpListenerRequest request = context.Request;

            string name = "", path;
            if (request.Url != null)
            {
                Logging.Log(request.Url);
                path = request.Url.AbsolutePath;
                if (path.Contains('%'))
                {
                    // decoding % escaped strings within URLs
                    path = s_UrlEscapeSeqence.Replace(path, DecodeEscaped);
                }
                if (path.StartsWith(s_DbveDir))
                {
                    task.ContinueWith(HandleDbveDomain,
                        TaskScheduler.Default);
                    return;
                }
                if (path.StartsWith(SavesManager.ShipDirectory))
                {
                    string[] split = path.Split('/');
                    if (split.Length > 0) name = split[^1];
                }
            }
            string origin = request.Headers.Get("Access-Control-Allow-Orig" +
                "in") ?? s_CorsOrigin;
            Logging.Log("Ship file name: " + name);

            const string CorsMethods = "GET, POST, PUT, DELETE, OPTIONS";
            HttpListenerResponse response = context.Response;
            response.AddHeader("Access-Control-Allow-Credentials", "true");
            response.AddHeader("Access-Control-Allow-Headers", "Accept, X-" +
                "Access-Token, X-Application-Name, X-Request-Sent-Time");
            response.AddHeader("Access-Control-Allow-Methods", CorsMethods);
            if (new Uri(s_CorsOrigin) == new Uri(origin))
            {
                response.AddHeader("Access-Control-Allow-Origin", origin);
            }

            FileOptions options;
            if (request.HttpMethod == "POST" || request.HttpMethod == "PUT")
            {
                try
                {
                    byte[] buffer = ReadAllBytes(request);
                    options = SavesManager.SaveShip(name, buffer);
                    if ((options & FileOptions.Error) > 0)
                    {
                        response.StatusCode = (int)InternalServerError;
                    }
                    else if ((options & FileOptions.Created) > 0)
                    {
                        response.StatusCode = (int)Created;
                    }
                    response.ContentLength64 = 0;
                    response.Close();

                }
                catch (Exception error)
                {
                    Logging.Warn(error);
                }
                if (s_listener == null) return;
                task = s_listener.GetContextAsync();
                task.ContinueWith(RespondAsync);
                return;
            }

            try
            {
                byte[] buffer = SavesManager.LoadShip(name, out options);
                if ((options & FileOptions.Error) > 0)
                {
                    response.StatusCode = (int)InternalServerError;
                    response.AddHeader("Encoding", "text/plain");
                }
                else if ((options & FileOptions.Missing) > 0)
                {
                    response.StatusCode = (int)NotFound;
                }
                else if ((options & FileOptions.TooLarge) > 0)
                {
                    response.StatusCode = (int)NotAcceptable;
                    buffer = Array.Empty<byte>();
                }
                if ((options & FileOptions.IsImage) > 0)
                {
                    response.AddHeader("Vary", "accept-length");
                }
                string type = SavesManager.BuildMimeType(options);
                if (type.Length > 0) response.AddHeader("Encoding", type);

                response.ContentLength64 = buffer.Length;
                response.Close(buffer, false);

            }
            catch (Exception error)
            {
                Logging.Warn(error);
            }
            if (s_listener == null) return;
            task = s_listener.GetContextAsync();
            task.ContinueWith(RespondAsync);
        }

        private const int EscapeLength = 3;
        private static string DecodeEscaped(Match match)
        {
            try
            {
                byte[] text = new byte[match.Value.Length / EscapeLength];
                for (int i = text.Length; i-- > 0;)
                    text[i] = DecodeUrlEscapeSequence(match.Value, i);
                return Encoding.UTF8.GetString(text);
            }
            catch (Exception error)
            {
                Logging.Warn(error);
            }
            return "";
        }
        private static byte DecodeUrlEscapeSequence(string value, int index)
        {
            const int SequenceIndicatorLength = 1, HexCodeLength = 2;
            var hexCode = value.Substring(SequenceIndicatorLength +
                index * EscapeLength, HexCodeLength);
            return Convert.ToByte(hexCode, 16);
        }

        private const string DefaultDbveFile = "editor.html";
        private static void HandleDbveDomain(Task<HttpListenerContext> task)
        {
            HttpListenerContext context = task.Result;
            HttpListenerRequest request = context.Request;
            HttpListenerResponse response = context.Response;

            if (request.Url == null) return;
            string path = request.Url.AbsolutePath[s_DbveDir.Length..^0];
            Logging.Log("Dbve path: " + path);

#if UNITY_2017_1_OR_NEWER
            ResourceRequest srcRequest;
            void HandleResourceLoaded(AsyncOperation operation)
            {
                var asset = srcRequest.asset;
                //Logging.Log(response.ContentLength64 = asset.bytes.Length);
                //response.Close(asset.bytes, false);
            }

            string name;
            string[] split = path.Split('/');
            if (split.Length > 0) name = split[^1];
            else name = DefaultDbveFile;

            try
            {
                throw new Exception("Dbve localhost waits for some people " +
                    "to care about Dbve's progress");
                TaskScheduler.FromCurrentSynchronizationContext();
                srcRequest = Resources.LoadAsync<TextAsset>(name);
                srcRequest.completed += HandleResourceLoaded;
                return;
#else
            try
            {
                throw new Exception("Dbve localhost doesn't work with Cons" +
                    "ole App, use Modular Spaceships with this mod");
#endif
            }
            catch (Exception error)
            {
                Logging.Warn(error);

                response.StatusCode = (int)InternalServerError;
                response.AddHeader("Encoding", "text/plain");
                byte[] buffer = Encoding.UTF8.GetBytes((error.Message ??
                    "") + ("\n" + error.StackTrace ?? "") + "\n");
                response.ContentLength64 = buffer.Length;
                response.Close(buffer, false);
            }
            if (s_listener == null) return;
            task = s_listener.GetContextAsync();
            task.ContinueWith(RespondAsync);
        }
        private static byte[] ReadAllBytes(HttpListenerRequest request)
        {
            const int FunnyMax = 6969;
            int end = request.ContentLength64 > int.MaxValue ?
                int.MaxValue :
                Convert.ToInt32(request.ContentLength64), loops = FunnyMax;
            var buffer = new byte[end];
            for (int start = 0; start < end && loops-- > 0;)
            {
                int count = end - start;
                start += request.InputStream.Read(buffer, start, count);
            }
            if (loops < 0) Logging.Warn("infinite loop probably");
            return buffer;
        }
    }

    internal class Logging
    {
        public static void Log(object message)
        {
            message ??= "null";
#if UNITY_2017_1_OR_NEWER
            UnityEngine.Debug.Log(message);
#else
            Console.WriteLine(message);
#endif
        }
        public static void Warn(object message)
        {
            message ??= "null";
#if UNITY_2017_1_OR_NEWER
            UnityEngine.Debug.LogWarning(message);
#else
            ConsoleColor old = Console.ForegroundColor;
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine(message);
            Console.ForegroundColor = old;
#endif
        }
    }
}
