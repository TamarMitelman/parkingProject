using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using DAL;
namespace BOL
{
    public class Convert_Parking
    {
        ParkingEntities db = new ParkingEntities();
        public static Parking_Entity convertToEntity(Parking p)
        {
            return new Parking_Entity()
            {
                p_Id = p.p_Id,
                p_Name = p.p_Name,
                p_Addess = p.p_Addess,
                p_Lat = p.p_Lat,
                p_Long = p.p_Long,
                p_ParkingsNum = p.p_ParkingsNum,
                p_EmptyParkings=p.p_EmptyParkings,
                p_For_few_days=p.p_For_few_days,
                p_Description = p.p_Description,
                p_ActivityHoursTill = p.p_ActivityHoursTill,
                p_ActivityHoursEnd = p.p_ActivityHoursEnd,
                p_PricesHour = p.p_PricesHour,
                p_API_Details = p.p_API_Details,
                p_BankDetails = p.p_BankDetails,
                p_image=p.p_image
            };
        }
        public static Parking convertToDal(Parking_Entity p)
        {
            return new Parking()
            {
                p_Id = p.p_Id,
                p_Name = p.p_Name,
                p_Addess = p.p_Addess,
                p_Lat = p.p_Lat,
                p_Long = p.p_Long,
                p_ParkingsNum = p.p_ParkingsNum,
                p_EmptyParkings=p.p_EmptyParkings.Value,
                p_For_few_days=p.p_For_few_days,
                p_Description = p.p_Description,
                p_ActivityHoursTill = p.p_ActivityHoursTill,
                p_ActivityHoursEnd = p.p_ActivityHoursEnd,
                p_PricesHour = p.p_PricesHour,
                p_API_Details = p.p_API_Details,
                p_BankDetails = p.p_BankDetails,
                p_image=p.p_image
                
            };
        }
    }
}
