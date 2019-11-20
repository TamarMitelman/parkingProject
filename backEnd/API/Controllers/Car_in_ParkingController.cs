using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
////using System.Web.Http.Cors;
using Entities;

namespace API.Controllers
{
    //[EnableCors(origins: "", headers: "*", methods: "*")]
    [RoutePrefix("api/Car_in_Parking")]
    public class Car_in_ParkingController : ApiController
    {
        [Route("GetAllCars")]
        [HttpGet]
        public List<Entities.Car_in_parking_Entity> Get(int parking_id)
        {
           return BLL.BLL_Car_in_parking.GetAllCars(parking_id);
        }

        [Route("AddCar")]
        [HttpPost]
        public IHttpActionResult addCar(Car_in_parking_Entity newCar )
        {
           string alertMessage=BLL.BLL_Car_in_parking.AddCar(newCar);
            return Ok(alertMessage);
        }

        [Route("DeleteCar")]
        [HttpDelete]
        public IHttpActionResult deleteCar(int id)
        {
            BLL.BLL_Car_in_parking.DeleteCar(id);
            return Ok("deleted");
        }

        [Route("CheckIfOkToParking")]
        [HttpPost]
        public IHttpActionResult checkIfOkToParking(Car_in_parking_Entity newCar)
        {
            string alertMessage = BLL.BLL_Car_in_parking.CheckIfOkToParking(newCar);
            return Ok(alertMessage);
        }
    }
}
