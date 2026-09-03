// v.0.2.45
using Localhost_Mod;

namespace ConsoleTest
{
    internal class Program
    {
        static int Main(string[] args)
        {
            Console.Write("[Localhost Mod for Modular Spaceships");
            Console.WriteLine(" by https://github.com/KaaBEL]");
            Console.WriteLine("Starting Localhost...");
            Localhost.Start();
            Console.Write("(Start finished) it is async");
            Console.WriteLine(", because the method isn't blocking");
            Localhost.PreloadSettings();
            Console.WriteLine("");

            Console.WriteLine("Press key to stop the program.");
            Console.Write(Console.Read());
            Localhost.Stop();
            return 0;
        }
    }
}
