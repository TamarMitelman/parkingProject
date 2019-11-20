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
    [RoutePrefix("api/Setting_user")]
    public class Setting_userController : ApiController
    {

        [Route("GetAllSetting")]
        [HttpGet]
        public Setting_user_Entity Get(int user_id)
        {
            return BLL.BLL_Setting_user.GetAllSetting(user_id);
        }

        [Route("EditSetting_user")]
        [HttpPost]
        public IHttpActionResult editSetting(Setting_user_Entity newUser_setting)
        {
            BLL.BLL_Setting_user.EditSetting_user(newUser_setting);
            return Ok("sat added successfuly");
        }

        [Route("DeleteSeting")]
        [HttpDelete]
        public IHttpActionResult DeleteUser(int user_id)
        {
            BLL.BLL_Setting_user.DeleteSeting(user_id);
            return Ok("deleted");
        }
    }
}


