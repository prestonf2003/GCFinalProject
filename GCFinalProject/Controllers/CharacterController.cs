﻿using Microsoft.AspNetCore.Mvc;
using GCFinalProject.Models;

namespace GCFinalProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharacterController : Controller
    {
        DnDContext db = new DnDContext();

        [HttpGet("ShowAllCharacters")]
        public List<Character> ShowAllCharacters()
        {
            return db.Characters.ToList();
        }
        [HttpGet("GetCharacterById/{id}")]
        public Character GetCharacterById(int id)
        {
            return db.Characters.Where(t => t.Id == id).First();
        }
        [HttpPut("CreateNewCharacter")]
        public string CreateCharacter(Character c)
        {
            db.Characters.Add(c);
            db.SaveChanges();
            return $"Character at {c.PkId} has been created";
        }
        [HttpPost("UpdateCharacter/{id}")]
        public string UpdateCharacter(int id, Character updatedCharacter)
        {
            Character c = db.Characters.Find(id);
            c.PkId = updatedCharacter.PkId;
            c.Class = updatedCharacter.Class;
            c.Subclass = updatedCharacter.Subclass;
            c.Strength = updatedCharacter.Strength;
            c.Dexterity = updatedCharacter.Dexterity;
            c.Constitution = updatedCharacter.Constitution;
            c.Intelligence = updatedCharacter.Intelligence;
            c.Wisdom = updatedCharacter.Wisdom;
            c.Charisma = updatedCharacter.Charisma;
            c.Id = updatedCharacter.Id;

        }
        [HttpDelete("DeleteCharacter/{id}")]
        public string DeleteCharacter(int id)
        {
            Character c = db.Characters.Find(id);
            db.Characters.Remove(c);
            db.SaveChanges();
            return $"Character at {c.PkId} has been sucessfully deleted";
        }
    }
}
