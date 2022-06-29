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
    public class FavoriteController : Controller
    {
        DnDContext db = new DnDContext();
        [HttpGet("ShowAllFavorites/")]
        public List<Favorite> ShowAllFavorites()
        {
            return db.Favorites.ToList();
        }
        [HttpPut("CreateNewFavorite/")]
        public string CreateFavorite(Favorite f)
        {
            db.Favorites.Add(f);
            db.SaveChanges();
            return $"{f.Id} was added to the database";
        }
        [HttpDelete("DeleteFavorite/{id}")]
        public string DeleteFavorite(int id)
        {
            Favorite f = db.Favorites.Find(id);
            db.Favorites.Remove(f);
            db.SaveChanges();
            return $"{f.Id} was removed from the database";
        }

    }
}
