// v.0.2.42
using System;
using System.Net;
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
     public class Localhost
    {
        public static readonly string s_DbveDir = "/.d1r.dbv";

        public static string s_CorsOrigin { get; set; } =
            "https://kaabel.github.io";

        private static HttpListener s_listener = new();
        private static Task s_task = new(() => { });
        private static readonly Regex s_UrlEscapeSeqence =
            new Regex("(?:%[a-fA-F0-9]{2})+");
        //-private static readonly Regex s_PathName =
        //-    new Regex("^[^?#]*\\/([^?#]*)");

        public static bool IsLive {
            get { return s_listener.IsListening; }
        }
        public static Func<int> PreloadSettings
        {
            get { return SaveFile.PreloadSettings; }
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
            gameObject.GetComponent<Button>().onClick.AddListener(delegate
                {
                    ToggleSetting(gameObject);
                });
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

            s_listener.Prefixes.Add("http://localhost:5501/Ships/");
            s_listener.Prefixes.Add("http://localhost:5501/.d1r.dbv/");
            s_listener.Start();
            Task<HttpListenerContext> task = s_listener.GetContextAsync();
            task.ContinueWith(RespondAsync);

#if UNITY_2017_1_OR_NEWER
            SaveFile.s_dataPath = UnityEngine.Application.persistentDataPath;
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
                    path = s_UrlEscapeSeqence.Replace(path, FixPath);
                }     
                if (path.StartsWith(s_DbveDir))
                {
                    HandleDbveDomain(task);
                    return;
                }
                if (path.StartsWith("/Ships/"))
                {
                    string[] split = path.Split('/');
                    if (split.Length > 0) name = split[^1];
                }
            }
            Logging.Log("Ship file name: " + name);

            HttpListenerResponse response = context.Response;
            response.AddHeader("Access-Control-Allow-Credentials", "true");
            response.AddHeader("Access-Control-Allow-Headers", "Accept, X-" +
                "Access-Token, X-Application-Name, X-Request-Sent-Time");
            response.AddHeader("Access-Control-Allow-Methods", "GET, POST," +
                " DELETE, OPTIONS");
            response.AddHeader("Access-Control-Allow-Origin", s_CorsOrigin);

            try
            {
                byte[] buffer = SaveFile.LoadShip(name, out LoadOptions o);
                if ((o & LoadOptions.Error) > 0)
                {
                    response.StatusCode = 500;
                }
                else if ((o & LoadOptions.Missing) > 0)
                {
                    response.StatusCode = 404;
                }
                else if ((o & LoadOptions.TooLarge) > 0)
                {
                    response.StatusCode = 406;
                    buffer = Array.Empty<byte>();
                }
                switch (o & LoadOptions.FileType)
                {
                    case LoadOptions.IsImage:
                        response.AddHeader("Vary", "accept-length");
                        // TODO: Add response header for Encoding
                        //response.AddHeader("Encoding", "");
                        break;
                    //case LoadOptions.IsJSON:
                    //response.AddHeader("Encoding", "application/json");
                    //break;
                    //...
                }
                response.ContentLength64 = buffer.Length;
                response.Close(buffer, false);

                if (s_listener == null) return;
                task = s_listener.GetContextAsync();
                task.ContinueWith(RespondAsync);
            }
            catch (Exception e)
            {
                Logging.Warn(e);
            }
        }
        private static string FixPath(Match match)
        {
            try
            {
                //-Console.WriteLine(match.Value);
                //-char[] test = { Convert.ToChar(
                //-    Convert.ToInt32(match.Value.Substring(1), 16)) };
                //-byte[] text = { Convert.ToByte(
                //-    match.Value.Substring(1), 16) };
                //-Console.Write(", Test0: " + new string(test));
                //-Console.Write(", Text1: " +
                //-    System.Text.Encoding.UTF8.GetString(text));
                byte[] text = new byte[match.Value.Length / 3];
                for (int i = text.Length; i-- > 0;)
                    text[i] = Convert.ToByte(
                        match.Value.Substring(i * 3 + 1, 2), 16);
                return Encoding.UTF8.GetString(text);
            }
            catch (Exception e)
            {
                Logging.Warn(e);
            }
            return "";
        }
        private static void HandleDbveDomain(Task<HttpListenerContext> task)
        {
            HttpListenerContext context = task.Result;
            HttpListenerRequest request = context.Request;
            HttpListenerResponse response = context.Response;

            if (request.Url == null) return;
            string path = request.Url.AbsolutePath[s_DbveDir.Length..^0];
            Logging.Log("Dbve path: " + path);
#if UNITY_2017_1_OR_NEWER
            string name;
            string[] split = path.Split('/');
            if (split.Length > 0) name = split[^1];
            else name = "editor.html";

            try
            {
                TextAsset asset = Resources.Load<TextAsset>("");

                response.ContentLength64 = asset.bytes.Length;
                response.Close(asset.bytes, false);
#else
            Logging.Warn("Dbve localhost doesn't work with Console App");
            try
            {
                response.StatusCode = 500;
                response.Close();
#endif
                if (s_listener == null) return;
                task = s_listener.GetContextAsync();
                task.ContinueWith(RespondAsync);
            }
            catch (Exception e)
            {
                Logging.Warn(e);
            }
        }

        // https://learn.microsoft.com/en-us/dotnet/api/system.net.httplistenerrequest?view=net-10.0#examples
        // This example requires the System and System.Net namespaces.
        public static void SimpleListenerExample(string prefixes)
        {
            if (!HttpListener.IsSupported)
            {
                Console.WriteLine("Windows XP SP2 or Server 2003 is requir" +
                    "ed to use the HttpListener class.");
                return;
            }
            // URI prefixes are required
            if (prefixes == null || prefixes.Length == 0)
            {
                throw new ArgumentException("no prefixes");
            }

            // Create a listener.
            HttpListener listener = new HttpListener();
            // Add the prefixes.
            foreach (string s in prefixes.Split('\n'))
            {
                listener.Prefixes.Add(s);
            }
            listener.Start();
            Logging.Log("Listening...");
            // Note: The GetContext method blocks while waiting for a request.
            HttpListenerContext context = listener.GetContext();
            HttpListenerRequest request = context.Request;
            if (request.Url != null) Logging.Log(request.Url);
            // Obtain a response object.
            HttpListenerResponse response = context.Response;
            // Construct a response.
            string responseString = "<html><body><style>body{background-c" +
                "olor:black;color:#777;font-size:32px;}</style> Hello, di" +
                "s is a little test!</body></html>";
            byte[] buffer = Encoding.UTF8.GetBytes(responseString);
            // Get a response stream and write the response to it.
            response.ContentLength64 = buffer.Length;
            System.IO.Stream output = response.OutputStream;
            output.Write(buffer, 0, buffer.Length);
            // You must close the output stream.
            output.Close();
            listener.Stop();
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
