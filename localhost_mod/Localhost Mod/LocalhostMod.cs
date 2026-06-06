// v.0.2.40
using System;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;
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

        public static bool IsLive { get { return s_listener.IsListening; } }

#if UNITY_2017_1_OR_NEWER
        public static void SetupUnityObject()
        {
            GameObject gameObject = GameObject.Find("menu_startlocalhost");
            if (gameObject == null)
            {
                Logging.Log("I haven't got menu_startlocalhost :(");
                return;
            }
            gameObject.GetComponent<Button>().onClick.AddListener(delegate
                {
                    ToggleSetting(gameObject);
                });
            string localized = Localization.LocalizeText("menu_" +
                (s_listener.IsListening ? "stop" : "start") + "localhost");
            gameObject.GetComponentInChildren<Text>().text = localized;
        }
        public static void ToggleSetting(GameObject gameObject)
        {
            bool turnOn = !s_listener.IsListening;
            if (turnOn) Start();
            else Stop();
            string localized = Localization.LocalizeText("menu_" +
                (s_listener.IsListening ? "stopstart" : "") + "localhost");
            gameObject.GetComponentInChildren<Text>().text = localized;
        }
#endif
        public static bool Start()
        {
            if (!HttpListener.IsSupported) return false;

            //-if (System.Threading.Thread.CurrentThread.Name != null)
            //-    Logging.Log(System.Threading.Thread.CurrentThread.Name);
            //-else
            //-    Logging.Warn("null");
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
            //-if (System.Threading.Thread.CurrentThread.Name != null)
            //-    Logging.Log(System.Threading.Thread.CurrentThread.Name);
            //-else
            //-    Logging.Warn("null");
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
                //    split = request.Url.ToString().Split('?', '#');
            }
            //if (split.Length > 0) split = split[0].Split('/', '\\');
            //if (split.Length > 0) ship = split[^1];
            Logging.Log("Ship file name: " + name);

            HttpListenerResponse response = context.Response;
            response.AddHeader("Access-Control-Allow-Credentials", "true");
            response.AddHeader("Access-Control-Allow-Headers", "Accept, X-" +
                "Access-Token, X-Application-Name, X-Request-Sent-Time");
            response.AddHeader("Access-Control-Allow-Methods", "GET, POST," +
                " DELETE, OPTIONS");
            response.AddHeader("Access-Control-Allow-Origin", s_CorsOrigin);
//new byte[13] { 87, 84, 70, 32, 109, 111, 109, 101, 110, 46, 46, 46, 33 };

            try
            {
                byte[] buffer = SaveFile.LoadShip(name);
                //-Logging.Log("IS NOT FINISHED! (v.75)");
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
            byte[] buffer = System.Text.Encoding.UTF8.GetBytes(responseString);
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
