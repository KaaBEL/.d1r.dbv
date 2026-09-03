// v.0.2.45
using System;
using System.IO;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Localhost_Mod
{
    enum FileOptions
    {
        None = 0,
        isJSON = 1,
        isMSSSS,
        isTXT,
        isHTML,
        isJS,
        IsImage = 8,
        isPNG,
        isJPG,
        isWEBM,
        Type = 15,
        Missing = 16,
        TooLarge = 32,
        Error = 64,
        Created = 128
    };
    internal class SaveFile
    {
        /// <summary>
        /// Is set to unity path in private Localhost.AsyncListener
        /// </summary>
        public static string s_dataPath =
            "C:/Users/" + System.Environment.UserName +
            "/AppData/LocalLow/Skyscraper Labs/Modular spaceships";
        public static byte[] LoadShip(string name)
        {
            return LoadShip(name, out _);
        }
        public static byte[] LoadShip(string name, out FileOptions status)
        {
            status = FileOptions.None;
            if (name.Length == 0) return LoadShip(out status);
            string path = GetPath();
            try
            {
                status |= ParseImageFileOptions(name);
                bool isImage = (status & FileOptions.IsImage) > 0;
                path += isImage ?
                    File.Exists(path + "/ShipImagesLowRes/" + name) ?
                        "/ShipImagesLowRes/" :
                        "/ShipImages/" :
                    "/Ships/";
                if (!File.Exists(path + name))
                {
                    Logging.Warn("Not found: " + path + name);
                    status |= FileOptions.Missing;
                    return Array.Empty<byte>();
                }
                byte[] content = File.ReadAllBytes(path + name);
                if (isImage && content.Length > 1024 * 1024)
                {
                    status |= FileOptions.TooLarge;
                }
                if (!isImage) status |= FileOptions.isMSSSS;
                Logging.Log("Path: " + path);
                return content;
            }
            catch (Exception error)
            {
                Logging.Warn(error);
                status |= FileOptions.Error;
                return Encoding.UTF8.GetBytes((error.Message ?? "") +
                     ("\n" + error.StackTrace ?? "") + "\n");
            }
        }
        public static byte[] LoadShip(out FileOptions status)
        {
            status = 0;
            if (!Directory.Exists(GetPath() + "/Ships"))
            {

                Logging.Log(GetPath() + "/Ships"); 
                status |= FileOptions.Missing | FileOptions.isJSON;
                return Encoding.UTF8.GetBytes("[ ]\n");
            }
            FileInfo[] info;
            try
            {
                info = new DirectoryInfo(GetPath() + "/Ships").GetFiles();
            }
            catch (Exception error)
            {
                Logging.Warn(error);
                status |= FileOptions.Error | FileOptions.isTXT;
                return Encoding.UTF8.GetBytes((error.Message ?? "") +
                     ("\n" + error.StackTrace ?? "") + "\n");
            }
            StringBuilder ships = new();
            foreach (var file in info)
            {
                ships.Append('"').Append(file.Name).Append("\",");
            }
            if (ships.Length > 0) ships.Length--;
            status |= FileOptions.isJSON;
            return Encoding.UTF8.GetBytes("[" + ships + "]");
        }
        public static FileOptions SaveShip(string name, byte[] content)
        {
            FileOptions status = FileOptions.None;
            if (!name.Contains("(mod).") && !name.Contains("(modded)."))
            {
                int index = name.LastIndexOf('.');
                name = name[0..index] + "(mod)" + name[index..];
            }
            status |= ParseImageFileOptions(name);
            bool isImage = (status & FileOptions.IsImage) > 0;
            string path = GetPath();
            path += isImage ? "/ShipImages/" : "/Ships/";
            if (!Directory.Exists(path)) Directory.CreateDirectory(path);
            if (!File.Exists(path + name)) status |= FileOptions.Created;
            try
            {
                Logging.Log(content.Length + " New file name: " + name);
                File.WriteAllBytes(path + name, content);
            }
            catch (Exception error)
            {
                Logging.Warn(error);
                status |= FileOptions.Error;
            }
            return status;
        }
        private static string GetPath()
        {
            string path = s_dataPath;
#if !UNITY_2017_1_OR_NEWER
            try
            {
                string[] lines = File.ReadAllLines("./settings.txt");
                if (lines.Length > 0) path = lines[0];
                if (lines.Length > 1) Localhost.s_CorsOrigin = lines[1];
                if (path.Length == 0) throw new Exception();
                Console.Write("Settings: " + lines.Length + ", ");
            }
            catch
            {
                var current = Environment.ProcessPath;
                Console.WriteLine("Missing MS data path in: " +
                    (current == null ?
                        "settings.txt" :
                        new Uri(new Uri(current), "./settings.txt")) +
                    " at line 1, using this path instead:\n" + path);
            }
#endif
            path = path.Replace('\\', '/');
            return path[^1] == '/' ? path[0..^1] : path;
        }

        private static readonly Regex s_ImageReg =
            new("\\.(?:PNG|JPG|JPEG|WEBM)$", RegexOptions.IgnoreCase);
        private static FileOptions ParseImageFileOptions(string name)
        {
            Match result = s_ImageReg.Match(name);
            if (!result.Success) return FileOptions.None;
            switch (result.Value[0..].ToLower())
            {
                case "png":
                    return FileOptions.isPNG;
                case "jpg":
                case "jpeg":
                    return FileOptions.isJPG;
                case "webm":
                    return FileOptions.isWEBM;
                default:
                    return FileOptions.IsImage;
            }
        }
        public static string BuildMimeType(FileOptions options)
        {
            if ((options & FileOptions.Type) == 0) return "";
            switch (options & FileOptions.Type)
            {
                case FileOptions.isJSON:
                    return "application/json";
                case FileOptions.isTXT:
                    return "text/plain";
                case FileOptions.isHTML:
                    return "text/plain";
                case FileOptions.isJS:
                    return "text/javascript";
                case FileOptions.isPNG:
                    return "image/png";
                case FileOptions.isJPG:
                    return "image/jpeg";
                case FileOptions.isWEBM:
                    return "image/webm";
                default:
                    return "application/octet-stream";
            }
        }
        public static int PreloadSettings()
        {
            try
            {
                string[] lines = File.ReadAllLines("./settings.txt");
                if (lines.Length > 1) Localhost.s_CorsOrigin = lines[1];
            }
            catch
            {
                return 1;
            }
            return 0;
        }
    }
}
