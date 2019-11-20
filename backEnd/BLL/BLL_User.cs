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
    public class BLL_User
    {
        public static ParkingEntities db = new ParkingEntities();

        //החזרת רשימה המשתמשים
        public static List<User_Entity> GetAllUsers()
        {
            List<User_Entity> Users = new List<User_Entity>();
            foreach (var item in db.users.ToList())
            {
                Users.Add(Convert_User.convertToEntity(item));
            }
            return Users;
        }
        //הוספת משתמש
        public static void AddUser(User_Entity user)
        {
            db.users.Add(Convert_User.convertToDal(user));
            db.SaveChanges();
        }
        //מחיקת משתמש
        public static void DeleteUser(int user_id)
        {
            //לפני שמוחקים משתמש מוחקים את הרכבים השייכים לו
            foreach (var item in db.Cars.ToList())
            {
                if (item.user_id == user_id)
                    BLL_Car.DeleteCar(item.id_car);
            }
            //לפני שמוחקים משתמש מוחקים את ההגדרות השייכים לו
            foreach (var item in db.Setting_user.ToList())
            {
                if (item.s_user_id == user_id)
                    BLL_Setting_user.DeleteSeting(item.s_user_id);
            }
            user user = db.users.Find(user_id);
            db.users.Remove(user);
            db.SaveChanges();
        }
        //חישוב סכום לתשלום
        public static int paying(Car_in_parking car)
        {
        //    foreach (var item in db.Parkings.ToList())
        //    {
        //        if (item.p_Id == car.c_parkingId)
        //            if(car.c_startHour.Hours - car.c_endHour.Value.Hours>0)
        //            return (item.p_PricesHour/60) * ((60*(car.c_startHour.Hours)+car.c_startHour.Minutes)- (60*(car.c_endHour.Value.Hours)+car.c_endHour.Value.Minutes));
        //            else return (item.p_PricesHour/60) * ((60*(car.c_endHour.Value.Hours)+car.c_endHour.Value.Minutes)-(60*(car.c_startHour.Hours)+car.c_startHour.Minutes));
        //    }
            return 0; 
        }
        //החזרת USER ע"פ הטלפון
        public static User_Entity searchUser(string phone)
        {
            user user = db.users.Find(phone);
            return Convert_User.convertToEntity(user);
        }
    }
}
