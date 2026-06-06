// v.0.2.40
using System;
using System.IO;
using System.Collections.Generic;
using static System.Text.Encoding;
using System.Text.RegularExpressions;

namespace Localhost_Mod
{
    internal class SaveFile
    {
        private static readonly Regex s_ImageReg =
            new("\\.(?:PNG|JPG|WEBM)$", RegexOptions.IgnoreCase);
        public static string s_dataPath =
            "C:/Users/" + System.Environment.UserName +
            "/AppData/LocalLow/Skyscraper Labs/Modular spaceships";
        public static byte[] LoadShip(string name)
        {
            //-Logging.Log("here, you don't know :3 where?");
            if (name.Length == 0) return LoadShip();
            string path = GetPath();
            try
            {
                path += s_ImageReg.IsMatch(name) ?
                    File.Exists(path + "/ShipImages/" + name) ?
                        "/ShipImages/" :
                        "/ShipImagesLowRes/" :
                    "/Ships/";
                Logging.Log("Path: " + path);
                return File.ReadAllBytes(path + name);
            }
            catch (Exception error)
            {
                Logging.Warn(error);
            }
            return Array.Empty<byte>();
        }
        public static byte[] LoadShip()
        {
            FileInfo[] info;
            try
            {
                string path = GetPath() + "/Ships";
                info = new DirectoryInfo(path).GetFiles();
                Console.WriteLine("ShipList: " + path);
            }
            catch (Exception error)
            {
                Logging.Warn(error);
                return Array.Empty<byte>();
            }
            var content = new List<byte>();
            foreach (var file in info)
            {
                content.AddRange(UTF8.GetBytes(file.Name + "\n"));
            }
            return content.ToArray();
        }
        private static string GetPath()
        {
            string path = s_dataPath;
#if !UNITY_2017_1_OR_NEWER
            try
            {
                string[] lines = File.ReadAllLines("./settings.txt");
                if (lines.Length > 0) path = lines[0];
                if (path.Length == 0) throw new Exception();
            }
            catch
            {
                Console.WriteLine("Missing MS data path in: \"" +
                    System.Threading.Thread.GetDomain().BaseDirectory +
                    "settings.txt\" at line 1, using this path instead:");
            }
#endif
            path = path.Replace('\\', '/');
            return path[^1] == '/' ? path[0..^1] : path;
        }
    }
}
