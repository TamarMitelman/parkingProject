using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Parking_Entity
    {
        public int p_Id { get; set; }
        public string p_Name { get; set; }
        public int p_Password { get; set; }
        public string p_Addess { get; set; }
        public decimal p_Long { get; set; }
        public decimal p_Lat { get; set; }
        public int p_ParkingsNum { get; set; }
        public Nullable<int> p_EmptyParkings { get; set; }
        public Nullable<bool> p_For_few_days { get; set; }
        public string p_Description { get; set; }
        public int p_PricesHour { get; set; }
        public string p_API_Details { get; set; }
        public string p_BankDetails { get; set; }
        public System.TimeSpan p_ActivityHoursTill { get; set; }
        public System.TimeSpan p_ActivityHoursEnd { get; set; }
        public double distance { get; set; }
        public string p_image { get; set; }

    }
}
