// v.0.2.42
using System;
using System.IO;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Localhost_Mod
{
    enum LoadOptions
    {
        Missing = 1,
        TooLarge = 2,
        Error = 4,
        IsImage = 16,
        IsJSON,
        IsMSSSS,
        FileType = 240
    };
    internal class SaveFile
    {
        private static readonly Regex s_ImageReg =
            new("\\.(?:PNG|JPG|WEBM)$", RegexOptions.IgnoreCase);
        public static string s_dataPath =
            "C:/Users/" + System.Environment.UserName +
            "/AppData/LocalLow/Skyscraper Labs/Modular spaceships";
        public static byte[] LoadShip(string name)
        {
            return LoadShip(name, out _);
        }
        public static byte[] LoadShip(string name, out LoadOptions status)
        {
            status = 0;
            if (name.Length == 0) return LoadShip(out status);
            string path = GetPath();
            try
            {
                bool isImage = s_ImageReg.IsMatch(name);
                path += isImage ?
                    File.Exists(path + "/ShipImagesLowRes/" + name) ?
                        "/ShipImagesLowRes/" :
                        "/ShipImages/" :
                    "/Ships/";
                if (!File.Exists(path + name))
                {
                    Logging.Warn("Not found: " + path + name);
                    status |= LoadOptions.Missing;
                    return Array.Empty<byte>();
                }    
                byte[] content = File.ReadAllBytes(path + name);
                if (isImage && content.Length > 1024 * 1024)
                {
                    status |= LoadOptions.TooLarge;
                }
                if (isImage) status |= LoadOptions.IsImage;
                Logging.Log("Path: " + path);
                return content;
            }
            catch (Exception error)
            {
                Logging.Warn(error);
            }
            return Array.Empty<byte>();
        }
        public static byte[] LoadShip(out LoadOptions status)
        {
            status = 0;
            if (!Directory.Exists(GetPath() + "/Ships"))
            {
                status |= LoadOptions.Missing;
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
                status |= LoadOptions.Error;
                return Array.Empty<byte>();
            }
            StringBuilder ships = new();
            foreach (var file in info)
            {
                ships.Append('"').Append(file.Name).Append("\",");
            }
            if (ships.Length > 0) ships.Length--;
            return Encoding.UTF8.GetBytes("[" + ships + "]");
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
