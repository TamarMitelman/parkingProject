using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using System.Web.Http.Cors;
using Entities;

namespace API.Controllers
{
    //[EnableCors(origins: "", headers: "*", methods: "*")]
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        [Route("GetAllUsers")]
        [HttpGet]
        public List<Entities.User_Entity> Get()
        {
            return BLL.BLL_User.GetAllUsers();
        }

        [Route("AddUser")]
        [HttpPost]
        public IHttpActionResult addUser(User_Entity newUser)
        {
            BLL.BLL_User.AddUser(newUser);
            return Ok("user added successfuly");
        }

        [Route("DeleteUser")]
        [HttpDelete]
        public IHttpActionResult deleteUser(int id)
        {
            BLL.BLL_User.DeleteUser(id);
            return Ok("deleted");
        }
        [HttpPost]
        //public IHttpActionResult pay(Car_in_parking_Entity car)
        //{
        //    BLL.BLL_User.paying(car);
        //    return Ok("ok");
        //}

        [Route("searchUser")]
        [HttpDelete]
        public IHttpActionResult search(string phone)
        {
            BLL.BLL_User.searchUser(phone);
            return Ok("deleted");
        }
    }
}
