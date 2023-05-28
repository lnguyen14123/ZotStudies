using Microsoft.EntityFrameworkCore;
using ZotStudyAPI.Models;

namespace ZotStudyAPI.Data
{
    public class ZotAPIDbcontext : DbContext
    {
        public ZotAPIDbcontext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
