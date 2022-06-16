using Newtonsoft.Json;
using System.Net;


namespace GCFinalProject.Models
{
    public class DndDAL
    {
        
        public string CallAPI(string Class)
        {
            string url = $"https://www.dnd5eapi.co/api/classes/{Class}";
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            StreamReader rd = new StreamReader(response.GetResponseStream());
            string JSON = rd.ReadToEnd();

            return JSON;
        }
        public DnD getClass(string d)
        {
            string result = CallAPI(d);
            DnD dnd = JsonConvert.DeserializeObject<DnD>(result);

            return dnd;
        }
    }
}
