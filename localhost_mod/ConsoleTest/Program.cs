// v.0.2.42
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
#if !UniUNITY_2017_1_OR_NEWER
            Localhost.PreloadSettings();
#endif
            Console.WriteLine("");

            Console.WriteLine("Press key to stop the program.");
            Console.Write(Console.Read());
            Localhost.Stop();
            return 0;
        }
    }
}
