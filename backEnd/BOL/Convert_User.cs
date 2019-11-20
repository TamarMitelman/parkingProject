using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using DAL;
namespace BOL
{
   public class Convert_User
    {
        ParkingEntities db = new ParkingEntities();
        public static User_Entity convertToEntity(user u)
        {
            return new User_Entity()
            {
                u_id = u.u_id,
                u_phone=u.u_phone
            };
        }
        public static user convertToDal(User_Entity u)
        {
            return new user()
            {
                u_id = u.u_id,
                u_phone = u.u_phone
            };
        }
    } 
}
