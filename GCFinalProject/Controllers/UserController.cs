using Microsoft.AspNetCore.Mvc;
using GCFinalProject.Models;
using System.Linq;

namespace GCFinalProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        DnDContext db = new DnDContext();

        [HttpPut("CreateUser")]
        public string CreateUser(User u)
        {
            db.Users.Add(u);
            db.SaveChanges();
            return $"{u.UserName} your account has been successfully created";
        }
        [HttpGet("ShowAllUsers")]
        public List<User> ShowAllUsers()
        {
            return db.Users.ToList();
        }
        [HttpPost("UpdateUser/{id}")]
        public string UpdateUser(int id, User Updated)
        {
            User u = db.Users.Find(id);
            u.UserName = Updated.UserName;
            u.Id = Updated.Id;
            db.Users.Update(u);
            db.SaveChanges();
            return $"User with username {u.UserName} has been updated";
        }
        [HttpDelete("DeleteUser/{id}")]
        public string DeleteUser(int id)
        {
            User u = db.Users.Find(id);
            db.Users.Remove(u);
            db.SaveChanges();
            return $"User with username {u.UserName} has been deleted";

        }
        [HttpGet("login")]
        public void login(string userId)
        {
            try
            {
                User u = db.Users.Find(userId);
            }
            catch(Exception ex)
            {
                User u = new User();
                u.UserName = userId;
                
                db.Users.Add(u);
               // db.SaveChanges();
            }
        }

    }
}
