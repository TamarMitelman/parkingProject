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
    public class BLL_Setting_user
    {
        public static ParkingEntities db = new ParkingEntities();

        //מחזיר את ההגדרות לפי משתמש
        public static Setting_user_Entity GetAllSetting(int user_id)
        {
            Setting_user setting = db.Setting_user.Find(user_id);
            return Convert_Setting_User.convertToEntity(setting);
        }
        //
        public static void EditSetting_user(Setting_user_Entity setting)
        {
            foreach (var item in db.Setting_user.ToList())
            {
                if (item.s_user_id == setting.s_user_id)
                {
                    item.s_choose_criterion = setting.s_choose_criterion;
                    item.s_range = setting.s_range;
                    db.SaveChanges();
                }
                
            }

        }
        //מחיקת הגדרות למשתמש שהוסר
        public static void DeleteSeting(int user_id)
        {
            Setting_user setting = db.Setting_user.Find(user_id);
            db.Setting_user.Remove(setting);
            db.SaveChanges();
        }



    }
}
