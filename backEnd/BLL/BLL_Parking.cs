using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BOL;
using DAL;
using Entities;
using System.Configuration;
using System.Net;
using System.Data;
using System.Xml;
using System.Device.Location;
//using Windows.Devices.Geolocation;
namespace BLL
{
    public class BLL_Parking
    {
        public static ParkingEntities db = new ParkingEntities();

        //החזרת רשימת כל החניונים
        public static List<Parking_Entity> GetAllParkings()
        {
            List<Parking_Entity> Parkings = new List<Parking_Entity>();
            foreach (var item in db.Parkings.ToList())
            {
                Parkings.Add(Convert_Parking.convertToEntity(item));
            }
            return Parkings;
        }
        public static Parking_Entity GetParking(int parkingId)
        {
            return Convert_Parking.convertToEntity(db.Parkings.Find(parkingId));
        }

        //הוספת חניון
        public static void AddParking(Parking_Entity parking)
        {
            db.Parkings.Add(Convert_Parking.convertToDal(parking));
            db.SaveChanges();
        }

        //מחיקת חניון
        public static void DeleteParking(int parking_id)
        {
            //לפני שמוחקים חניון מוחקים את בטבלת חניונים של מנהל השייכים לו
            foreach (var item in db.Parkings_of_owner.ToList())
            {
                if (item.op_parking_id == parking_id)
                    BLL_Parkings_of_owner.DeleteParkings_of_owner(item.op_parking_id);
            }
            Parking parking = db.Parkings.Find(parking_id);
            db.Parkings.Remove(parking);
            db.SaveChanges();
        }
        //מחזיר רשימת חניונים לפי קרטריון בחירה
        public static List<Parking_Entity> getParkings_Search(int user_id, double latA, double longA, string orderby)
        {
            List<Parking_Entity> searchParking_list = new List<Parking_Entity>();
            //לולאה על כל החניונים חישוב לפי נקודות שלהם
            foreach (var parking in db.Parkings)
            {
                var locA = new GeoCoordinate(latA, longA);
                var locB = new GeoCoordinate((double)parking.p_Lat, (double)parking.p_Long);
                //var dif= Math.Atan2(yDiff, xDiff) * 180.0 / Math.PI;
                double distance1 = locA.GetDistanceTo(locB);
                if (distance1 < 2000)
                {
                    var par = Convert_Parking.convertToEntity(parking);
                    par.distance = distance1;
                    searchParking_list.Add(par);
                }
            } 
            if (orderby == "orderByFull")
                return searchParking_list.OrderByDescending(x => x.p_EmptyParkings).ToList();// תפוסה
            else if (orderby == "orderByCost")
                return searchParking_list.OrderBy(x => x.p_PricesHour).ToList();//מחיר
            else searchParking_list = searchParking_list.OrderBy(p => p.distance).ToList();
            return searchParking_list;
        }


        // בדיקה האם קיימים חניות פנויות בתאריך מסוים
        public static Boolean emptyParking(int parkingId, int carInParkingNum, DateTime day)
        {
            Parking parking = db.Parkings.Find(parkingId);
            if (day.Date == DateTime.Today)
            {
                if (parking.p_EmptyParkings <= 0)
                    return false;
            }
            else
            {
                if (parking.p_ParkingsNum - carInParkingNum <= 0)
                    return false;
            }
            return true;
        }

        //הפחתת מספר חניות פנויות בחניון
        public static void updateEmptyParking(int parkingId)
        {
            Parking parking = db.Parkings.Find(parkingId);
            parking.p_EmptyParkings -= 1;
            db.SaveChanges();
        }
        // מחזיר האם חניון מסוים מאפשר תפיסה לכמה ימים
        public static bool enableForFewDays(int parkingId)
        {

            if (db.Parkings.Find(parkingId).p_For_few_days == true)
                return true;
            return false;
        }
        // מחזיר את שעות פעילות של חניון מסוים
        public static Parking parkingActivityTime(int parkingId)
        {
            Parking parking = db.Parkings.Find(parkingId);
            return parking;
        }
    }
}
