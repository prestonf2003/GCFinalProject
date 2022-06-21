using System;
using System.Collections.Generic;

namespace GCFinalProject.Models
{
    public partial class Favorite
    {
        public int PkId { get; set; }
        public string? UserId { get; set; }
        public int? Id { get; set; }

        public virtual Character? IdNavigation { get; set; }
    }
}
