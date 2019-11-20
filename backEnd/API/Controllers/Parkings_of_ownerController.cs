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
    [RoutePrefix("api/Parkings_of_owner")]
    public class Parkings_of_ownerController : ApiController
    {
        [Route("GetAllParkings")]
        [HttpGet]
        public List<Parking_Entity> Get(int owner_id)
        {
            return BLL.BLL_Parkings_of_owner.GetAllParkings(owner_id);
        }

        [Route("AddOwner_parkings")]
        [HttpPost]
        public IHttpActionResult addUser(Parkings_of_owner_Entity newParking)
        {
            BLL.BLL_Parkings_of_owner.AddOwner_parkings(newParking);
            return Ok("ownerParking added successfuly");
        }

        [Route("DeleteParkings_of_owner")]
        [HttpDelete]
        public IHttpActionResult deleteOwnerParking(int parking_id)
        {
            BLL.BLL_Parkings_of_owner.DeleteParkings_of_owner(parking_id);
            return Ok("deleted");
        }
    }
}
