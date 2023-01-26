using Microsoft.EntityFrameworkCore;

namespace ForSmart2.DBContext
{
    public class SalesDBContext: DbContext
    {
        public SalesDBContext(DbContextOptions options) : base(options) { 
        
        }

        public DbSet<SalesProducts> SalesProducts { get; set;    }
    }
}
