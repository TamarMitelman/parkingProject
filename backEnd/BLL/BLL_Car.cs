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
    public class BLL_Car
    {
        public static ParkingEntities db = new ParkingEntities();

        //החזרת רשימה המכילה את כל הרכבים
        public static List<Car_Entity> GetAllCar()
        {
            List<Car_Entity> cars = new List<Car_Entity>();
            foreach (var item in db.Cars.ToList())
            {
                cars.Add(Convert_Car.convertToEntity(item));
            }
            return cars;
        }

        //הוספת רכב חדש
        public static void AddCar(Car_Entity car)
        {
            db.Cars.Add(Convert_Car.convertToDal(car));
            db.SaveChanges();
        }

        //מחיקת רכב 
        public static void DeleteCar(int car_id)
        {
            Car car = db.Cars.Find(car_id);
            db.Cars.Remove(car);
            db.SaveChanges();
        }
        public static void editCar(Car_Entity newCar)
        {
            foreach (var item in db.Cars.ToList())
            {
                if (item.id_car == newCar.id_car)
                {
                    item.user_id = newCar.user_id;
                    db.SaveChanges();
                }
            }
        }
        public static List<Car_Entity> GetUserCars(int user_id)
        {
            List<Car_Entity> cars = new List<Car_Entity>();
            foreach (var car in db.Cars.ToList())
            {
                if (car.user_id == user_id)
                    cars.Add(Convert_Car.convertToEntity(car));
            }
            return cars;
        }
    }


}
