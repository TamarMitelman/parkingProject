using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using DAL;
namespace BOL
{
    public  class Convert_Car_in_parking
    {
        ParkingEntities db = new ParkingEntities();
        public static Car_in_parking_Entity convertToEntity(Car_in_parking c)
        {
            return new Car_in_parking_Entity()
            {
                c_id = c.c_id,
                c_parkingId = c.c_parkingId,
                c_car_id = c.c_car_id,
                c_date_start = c.c_date_start,
                c_date_end = c.c_date_end,
            };
        }
        public static Car_in_parking convertToDal(Car_in_parking_Entity c)
        {
            return new Car_in_parking()
            {
                c_car_id = c.c_car_id,
                c_parkingId = c.c_parkingId,
                c_date_start =c.c_date_start,
                c_date_end = c.c_date_end,
            };
        }
    }
}
