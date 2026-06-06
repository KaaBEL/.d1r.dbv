// v.0.2.40
using Localhost_Mod;

namespace ConsoleTest
{
    internal class Program
    {
        static int Main(string[] args)
        {
            Localhost.Start();
            Console.WriteLine("it is async, because the method isn't blocking");
            Console.WriteLine("");

            Console.WriteLine("Press key to stop the program.");
            Console.Write(Console.Read());
            Localhost.Stop();
            return 0;
        }
    }
}
