using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ForSmart2.DBContext
{
    public class Node
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id{ get; set; }
        public double XPosition{ get; set; }
        public double YPosition { get; set; }
    }
}
