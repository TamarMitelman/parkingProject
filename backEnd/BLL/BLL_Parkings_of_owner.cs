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
    public class BLL_Parkings_of_owner
    {
        public static ParkingEntities db = new ParkingEntities();
        //החזרת רשימת חניונים של מנהל
        public static List<Parking_Entity> GetAllParkings(int owner_id)
        {
            List<Parking_Entity> owners_parkings = new List<Parking_Entity>();
            foreach (var item in db.Parkings_of_owner.ToList())
            {
                if (item.op_owner_id == owner_id)
                    foreach (var parking in db.Parkings.ToList())
                    {
                        if(parking.p_Id==item.op_parking_id)
                            owners_parkings.Add(Convert_Parking.convertToEntity(parking));
                    }
            }
            return owners_parkings;
        }
        //הוספת חניון למנהל קיים 
        public static void AddOwner_parkings(Parkings_of_owner_Entity owner)
        {
            db.Parkings_of_owner.Add(Convert_Parkings_of_owner.convertToDal(owner));
            db.SaveChanges();
        }
        //מחיקת חניון שהוסר מטבלת חניונים
        public static void DeleteParkings_of_owner(int parking_id)
        {
            //  לפני שמוחקים חניונים של מנהל מוחקים את החניון מטבלת חניונים
            foreach (var item in db.Parkings.ToList())
            {
                if (item.p_Id == parking_id)
                    BLL_Parking.DeleteParking(item.p_Id);
            }
            Parkings_of_owner owner = db.Parkings_of_owner.Find(parking_id);
            db.Parkings_of_owner.Remove(owner);
            db.SaveChanges();
        }
    }


}

