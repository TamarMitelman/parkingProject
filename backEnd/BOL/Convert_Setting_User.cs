using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using DAL;
namespace BOL
{
  public  class Convert_Setting_User
    {
        ParkingEntities db = new ParkingEntities();
        public static Setting_user_Entity convertToEntity(Setting_user set_user)
        {
            return new Setting_user_Entity()
            {
               s_user_id=set_user.s_user_id,
               s_choose_criterion=set_user.s_choose_criterion,
               s_range=set_user.s_range
            };
        }
        public static Setting_user convertToDal(Setting_user_Entity set_user)
        {
            return new Setting_user()
            {
               s_user_id=set_user.s_user_id,
               s_choose_criterion=set_user.s_choose_criterion,
               s_range=set_user.s_range
            };
        }
    }
}