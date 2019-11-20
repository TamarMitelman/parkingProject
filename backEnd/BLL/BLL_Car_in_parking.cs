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
    public class BLL_Car_in_parking
    {
        public static ParkingEntities db = new ParkingEntities();

        //הצגת רכבים בחניון מסוים
        public static List<Car_in_parking_Entity> GetAllCars(int parking_id)
        {
            List<Car_in_parking_Entity> carsInParking = new List<Car_in_parking_Entity>();
            foreach (var item in db.Car_in_parking.ToList())
            {
                if (item.c_parkingId == parking_id)
                    carsInParking.Add(Convert_Car_in_parking.convertToEntity(item));
            }
            return carsInParking;
        }

        //הוספת רכב לחניון
        public static string AddCar(Car_in_parking_Entity car)
        {
            db.Car_in_parking.Add(Convert_Car_in_parking.convertToDal(car));
            BLL.BLL_Parking.updateEmptyParking(car.c_parkingId);
            db.SaveChanges();
            return "חניה נתפסה בהצלחה";

        }

        // מחיקת רכב מחניון שהוסר
        public static void DeleteCar(int id_car)
        {
            Car_in_parking car = db.Car_in_parking.Find(id_car);
            db.Car_in_parking.Remove(car);
            db.SaveChanges();
        }


        //מחזיר מספר רכבים חונים לחניון מסוים
        public static int carsInParking(int parkingId, DateTime currentDate)
        {
            int carNum = 0;
            foreach (var carInParking in db.Car_in_parking) //עובר על הרכבים שחונים
            {
                if (carInParking.c_parkingId == parkingId)// בודק האם חונה בחניון הרצוי
                {
                    if (BLL_Parking.enableForFewDays(parkingId) == true)
                    {
                        for (var day = carInParking.c_date_start.Date; day.Date <= carInParking.c_date_end.Value.Date; day = day.AddDays(1))//עובר על הימי חניה של רכב זה ובודק האם אחד מימי החניה שלו זהים ליום הרצוי
                            if (day == currentDate.Date && (day.AddDays(1) > carInParking.c_date_end.Value.Date))//בודק אם זה יום זהה ליום הרצוי וכן אם לא חונה יום למחרת דבר שמוריד את הצורך לבדוק שעות ודקות
                                for (var hour = carInParking.c_date_start; hour.Hour <= carInParking.c_date_end.Value.Hour; hour = hour.AddHours(1))//עובר על השעות חניה של רכב זה ובודק האם אחד משעות החניה שלו זהים לשעה הרצויה
                                    if (hour.Hour == currentDate.Hour && (hour.AddHours(1)).Hour > carInParking.c_date_end.Value.Hour)//בודק אם זה שעה זהה לשעה הרצויה וכן אם לא חונה שעה אחרי דבר שמוריד את הצורך לבדוק דקות
                                        for (var minute = carInParking.c_date_start; minute.Minute <= carInParking.c_date_end.Value.Minute + 10; minute = minute.AddMinutes(1))//עובר על דקות חניה של רכב זה ובודק האם אחד מדקות החניה שלו זהים לדקות הרצויות
                                            carNum++;
                    }
                    else
                    {
                        if (carInParking.c_date_start.Date == currentDate.Date)//בודק אם זה יום זהה ליום הרצוי 
                            for (var hour = carInParking.c_date_start; hour.Hour <= carInParking.c_date_end.Value.Hour; hour = hour.AddHours(1))//עובר על השעות חניה של רכב זה ובודק האם אחד משעות החניה שלו זהים לשעה הרצויה
                                if (hour.Hour == currentDate.Hour && (hour.AddHours(1)).Hour > carInParking.c_date_end.Value.Hour)//בודק אם זה שעה זהה לשעה הרצויה וכן אם לא חונה שעה אחרי דבר שמוריד את הצורך לבדוק דקות
                                    for (var minute = carInParking.c_date_start; minute.Minute <= carInParking.c_date_end.Value.Minute + 10; minute = minute.AddMinutes(1))//עובר על דקות חניה של רכב זה ובודק האם אחד מדקות החניה שלו זהים לדקות הרצויות
                                        carNum++;
                    }
                }
            }
            return carNum;
        }


        //בודק האם קיימות חניות פנויות בחניון
        public static Boolean checkEmptyParkings(Car_in_parking_Entity car)
        {

            int carInParking = 0;
            for (var day = car.c_date_start; day.Date <= car.c_date_end; day = day.AddDays(1))
            {
                carInParking = carsInParking(car.c_parkingId, day);
                if (BLL_Parking.emptyParking(car.c_parkingId, carInParking, day) == false)
                    return false;
            }
            return true;
        }
        //בדיקה האם ניתן לחנות בחניון הרצוי
        public static string CheckIfOkToParking(Car_in_parking_Entity car)
        {
            car.c_date_start = car.c_date_start.AddHours(3);
            car.c_date_end = car.c_date_end.Value.AddHours(3);
            Parking parking = BLL_Parking.parkingActivityTime(car.c_parkingId);

            if (checkEmptyParkings(car) == false)
                return "החניון מלא";
            else if (car.c_date_start.Hour >= parking.p_ActivityHoursTill.Hours && car.c_date_end.Value.Hour <= parking.p_ActivityHoursEnd.Hours)//בדיקה האם שעות החניה בשעות הפעילות
                return "שעות מחוץ לשעות פעילות החניון";
            return "ניתן לתפוס חניה";
        }
    }
}