using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using System.Web.Http.Cors;

namespace API.Controllers
{
    //[EnableCors(origins: "", headers: "*", methods: "*")]
    [RoutePrefix("api/Parkings_owner")]
    public class Parkings_ownerController : ApiController
    {
        [Route("GetAllOwners")]
        [HttpGet]
        public List<Entities.Parking_owner_Entity> Get()
        {
            return BLL.BLL_Parking_owner.GetAllOwners();
        }

        [Route("AddOwner")]
        [HttpPost]
        public IHttpActionResult addOwner(Entities.Parking_owner_Entity newOwner)
        {
            BLL.BLL_Parking_owner.AddOwner(newOwner);
            return Ok("car added successfuly");
        }

        [Route("DeleteOwner")]
        [HttpDelete]
        public IHttpActionResult deleteOwner(int owner_id)
        {
            BLL.BLL_Parking_owner.DeleteOwner(owner_id);
            return Ok("deleted");
        }
    }

}
