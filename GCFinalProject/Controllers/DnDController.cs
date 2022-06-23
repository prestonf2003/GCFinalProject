using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GCFinalProject.Models;

namespace GCFinalProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DnDController : Controller
    {
        DndDAL dal = new DndDAL();


        [HttpGet("GetClassByName/{name}")]
        public DnD GetClassByName(string name)
        {
            return dal.getClass(name);
        }
        [HttpGet("GetAll")]
        public List<string> GetAll()
        {
            return dal.getClasses();
        }
        [HttpGet("GetSubclasses")]
        public List<string> GetSubclasses(){
            return dal.getSubClasses();
}

        [HttpGet("GetSpells")]
        public List<string> GetSpells()
        {
            return dal.getSpells();
        }
        [HttpGet("SearchSpells/{name}")]
        public List<string> SearchSpells(string name)
        {
            return dal.SearchSpells(name);
            
        }
    }

}
