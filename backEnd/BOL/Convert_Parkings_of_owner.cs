

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using DAL;
namespace BOL
{
   public class Convert_Parkings_of_owner
    {
    
        ParkingEntities db = new ParkingEntities();

        public static Parkings_of_owner_Entity convertToEntity(Parkings_of_owner owner)
        {
            return new Parkings_of_owner_Entity()
            {
                op_id=owner.op_id,
                op_owner_id=owner.op_owner_id,
                op_parking_id=owner.op_parking_id
            };
        }
        public static Parkings_of_owner convertToDal(Parkings_of_owner_Entity owner)
        {
            return new Parkings_of_owner()
            {
             op_id=owner.op_id,
             op_owner_id=owner.op_owner_id,
             op_parking_id=owner.op_parking_id
            };
        }
    }
}
