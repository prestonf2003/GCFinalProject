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

        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("GetClassByName/{name}")]
        public DnD GetClassByName(string name)
        {
            return dal.getClass(name);
        }


    }
}
