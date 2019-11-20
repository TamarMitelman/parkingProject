using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
 public   class Parkings_of_owner_Entity
    {
        public int op_id { get; set; }
        public int op_parking_id { get; set; }
        public Nullable<int> op_owner_id { get; set; }

    }
}
