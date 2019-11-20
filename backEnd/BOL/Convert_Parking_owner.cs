using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using DAL;
namespace BOL
{
  public  class Convert_Parking_owner
    {

        ParkingEntities db = new ParkingEntities();

        public static Parking_owner_Entity convertToEntity(Parking_owner owner)
        {
            return new Parking_owner_Entity()
            {
                o_id = owner.o_id,
                o_name = owner.o_name,
                o_password=owner.o_password
            };
        }
        public static Parking_owner convertToDal(Parking_owner_Entity owner)
        {
            return new Parking_owner()
            {
                o_id=owner.o_id,
                o_name=owner.o_name,
                o_password=owner.o_password
            };
        }
    }
}
