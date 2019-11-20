using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using DAL;
namespace BOL
{
   public class Convert_Car
    {
        ParkingEntities db = new ParkingEntities();

        public static Car_Entity convertToEntity(Car car)
        {
            return new Car_Entity()
            {
                car_number = car.car_number,
                id_car = car.id_car,
                user_id=car.user_id
            };
        }
        public static Car convertToDal(Car_Entity car)
        {
            return new Car()
            {
                car_number = car.car_number,
                user_id = car.user_id,
            };
        }
    }
}
