using IndexTF3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace IndexTF3.Controllers
{
    public class BaseController : ApiController
    {
        public bool VerificarToken(string token)
        {
            using (mis_viajesEntities db = new mis_viajesEntities())
            {
                if (db.Usuarios.Where(a => a.Token == token).Count() > 0)
                {
                    return true;

                }
                return false;
            }
                
        }
    }
}
