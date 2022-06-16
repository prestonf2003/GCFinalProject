using System;
using System.Collections.Generic;

namespace GCFinalProject.Models
{
    public partial class User
    {
        public User()
        {
            Characters = new HashSet<Character>();
        }

        public int Id { get; set; }
        public string UserName { get; set; } = null!;

        public virtual ICollection<Character> Characters { get; set; }
    }
}
