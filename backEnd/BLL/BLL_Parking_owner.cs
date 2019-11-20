using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BOL;
using DAL;
using Entities;
namespace BLL
{
    public class BLL_Parking_owner
    {
        public static ParkingEntities db = new ParkingEntities();

        //מחזיר רשימת מנהלי חניונים
        public static List<Parking_owner_Entity> GetAllOwners()
        {
            List<Parking_owner_Entity> owners = new List<Parking_owner_Entity>();
            foreach (var item in db.Parking_owner.ToList())
            {
                owners.Add(Convert_Parking_owner.convertToEntity(item));
            }
            return owners;
        }
        //מוסיף מנהל חניון
        public static void AddOwner(Parking_owner_Entity owner)
        {
            db.Parking_owner.Add(Convert_Parking_owner.convertToDal(owner));
            db.SaveChanges();
        }
        //מוחק מנהל חניון
        public static void DeleteOwner(int owner_id)
        {
            //לפני שמוחקים מנהל מוחקים את החניונים השייכים לו מטבלת חניונים של מנהל ומטבלת חניונים
            foreach (var item in db.Parkings_of_owner.ToList())
            {
                if (item.op_owner_id == owner_id)
                    BLL_Parkings_of_owner.DeleteParkings_of_owner(item.op_parking_id);
            }
            Parking_owner owner = db.Parking_owner.Find(owner_id);
            db.Parking_owner.Remove(owner);
            db.SaveChanges();
        }
    }
}

