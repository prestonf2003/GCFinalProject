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
        public string CallEndpoint(string endpoint)
        {
            string url = $"https://www.dnd5eapi.co/api/{endpoint}";
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
        public List<string> getClasses()
        {
            string result = CallEndpoint("classes");
           Rootobject r = JsonConvert.DeserializeObject<Rootobject>(result);
            List<string> chars = new List<string>();
            for(int i = 0; i < 12; i++)
            {
                string character = r.results[i].name;
                chars.Add(character);
            }
            
            return chars;
            
        }
        public List<string> getSubClasses()
        {
            string result = CallEndpoint("subclasses");
            Rootobject r = JsonConvert.DeserializeObject<Rootobject>(result);
            List<string> subclasses = new List<string>();
            for(int i=0; i < 12; i++)
            {
                string subclass = r.results[i].name;
                subclasses.Add(subclass);
            }
            return subclasses;
        }
        public List<string> getSpells()
        {
            string result = CallEndpoint("spells");
            Rootobject r = JsonConvert.DeserializeObject<Rootobject>(result);
            List<string> spells = new List<string>();
            for (int i = 0; i < 319; i++)
            {
                string spell = r.results[i].name;
                spells.Add(spell);
            }
            return spells;
        }
        public List<string> SearchSpells(string spell)
        {
            string result = CallEndpoint("spells");
            Rootobject r = JsonConvert.DeserializeObject<Rootobject>(result);
            List<string> spells = new List<string>();
            for (int i = 0; i < 319; i++)
            {
                string spellName = r.results[i].name;
                spells.Add(spellName);
            }
            
            List<string> searched = spells.Where(s => s.Contains(spell)).ToList();
            return searched;
      

        }
    }
}







