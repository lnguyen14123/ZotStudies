using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZotStudyAPI.Data;
using ZotStudyAPI.Models;

namespace ZotStudyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly ZotAPIDbcontext dbContext;
        public UsersController(ZotAPIDbcontext dbcontext)
        {
            this.dbContext = dbcontext;
        }

        public ZotAPIDbcontext Dbcontext { get; }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            return Ok(await dbContext.Users.ToListAsync());
            //return View();
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetUser([FromRoute] Guid id)
        {
            var user = await dbContext.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(AddUserRequest addUserRequest)
        {
            var user = new User()
            {
                Id = Guid.NewGuid(),
                Email = addUserRequest.Email,
                Username = addUserRequest.Username,
                Password = addUserRequest.Password
            };

            await dbContext.Users.AddAsync(user);
            await dbContext.SaveChangesAsync();

            return Ok(user);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateUser([FromRoute] Guid id, UpdateUserRequest updateUserRequest)
        {
            var user = await dbContext.Users.FindAsync(id);

            if (user != null)
            {
                user.Email = updateUserRequest.Email;
                user.Username = updateUserRequest.Username;
                user.Password = updateUserRequest.Password;

                await dbContext.SaveChangesAsync();

                return Ok(user);
            }

            return NotFound();

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteUser([FromRoute] Guid id)
        {
            var user = await dbContext.Users.FindAsync(id);

            if (user != null)
            {
                dbContext.Remove(user);
                await dbContext.SaveChangesAsync();

                return Ok(user);
            }

            return NotFound();
        }
    }
}
