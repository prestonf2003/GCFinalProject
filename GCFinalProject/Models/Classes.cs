namespace GCFinalProject.Models
{

    public class Rootobject
    {
        public int count { get; set; }
        public Result[] results { get; set; }
    }

    public class Result
    {
        public string index { get; set; }
        public string name { get; set; }
        public string url { get; set; }
    }

}
