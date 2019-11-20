using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using DAL;
namespace BOL
{
    class Convert_Criterion
    {
        ParkingEntities db = new ParkingEntities();
        public static Criterion_Entity convertToEntity(Criterion c)
        {
            return new Criterion_Entity()
            {
                c_id = c.c_id,
                c_value=c.c_value
            };
        }
        public static Criterion convertToDal(Criterion_Entity c)
        {
            return new Criterion()
            {
               c_id=c.c_id,
               c_value=c.c_value
            };
        }
    }
}

