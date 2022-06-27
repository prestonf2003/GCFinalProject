using System;
using System.Collections.Generic;

namespace GCFinalProject.Models
{
    public partial class CartoonChar
    {
        public int PkId { get; set; }
        public string? Name { get; set; }
        public int? HeavyAttack { get; set; }
        public int? LightAttack { get; set; }
    }
}
