using GCFinalProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace GCFinalProject.Controllers
{
    public class CartoonController : Controller
    {
        DnDContext db = new DnDContext();
        [HttpGet("ShowAllCartoonCharacters")]
        public List <CartoonChar> ShowAllCartoonCharacters()
        {
            return db.CartoonChars.ToList();

        }
        [HttpPost("UpdateCartoonCharacters/{id}")]
        public string UpdateCartoonCharacters(int id, CartoonChar upDatedCartoonChar)
        {
            CartoonChar Cart = db.CartoonChars.Find(id);
            Cart.Name= upDatedCartoonChar.Name;
            Cart.LightAttack = upDatedCartoonChar.LightAttack;
            Cart.HeavyAttack = upDatedCartoonChar.HeavyAttack;
            return $"Character at Id {Cart.PkId} has been updated.";
        }
        [HttpDelete("DeleteCartoonCharacter/{id}")]
        public string DeleteCartoonCharacter(int id)
        {
            CartoonChar Cart = db.CartoonChars.Find(id);
            db.CartoonChars.Remove(Cart);
            db.SaveChanges();
            return $"Character at {Cart.PkId} has been sucessfully deleted";
        }
        [HttpPut("CreateNewCartoonCharacter")]
        public string CreateCartoonCharacter(CartoonChar Cart)
        {
            db.CartoonChars.Add(Cart);
            db.SaveChanges();
            return $"Character at {Cart.PkId} has been created";
        }
    }
}
