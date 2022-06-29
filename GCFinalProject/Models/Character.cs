using System;
using System.Collections.Generic;

namespace GCFinalProject.Models
{
    public partial class Character
    {
        public Character()
        {
            Favorites = new HashSet<Favorite>();
        }

        public int PkId { get; set; }
        public string? Class { get; set; }
        public string? Subclass { get; set; }
        public int? Strength { get; set; }
        public int? Dexterity { get; set; }
        public int? Constitution { get; set; }
        public int? Intelligence { get; set; }
        public int? Wisdom { get; set; }
        public int? Charisma { get; set; }

        public virtual ICollection<Favorite> Favorites { get; set; }
    }
}
