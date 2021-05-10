using IndexTF3.Models;
using IndexTF3.Models.WS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace IndexTF3.Controllers
{
    public class LoginController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Login(Models.WS.Seguridad seguridad)
        {
            
            var oRespuesta = new Loggin();
            using (Models.mis_viajesEntities db = new Models.mis_viajesEntities())
            {
                var lista = db.Usuarios.Where(a => a.usu_cor == seguridad.usu_cor && a.usu_con == seguridad.usu_con);
                
                if (lista.Count() > 0)
                {
                    oRespuesta.Resultado = 1;
                    oRespuesta.Mensaje = "Login correcto";
                    oRespuesta.Datos = Guid.NewGuid().ToString();

                    Usuarios oUsuario = lista.FirstOrDefault();
                    oUsuario.Token = oRespuesta.Datos.ToString();

                    db.Entry(oUsuario).State = System.Data.Entity.EntityState.Modified;

                    db.SaveChanges();

                }
                else
                {
                    oRespuesta.Resultado = 0;
                    oRespuesta.Mensaje = "Login incorrecto";
                }
            }

            return Ok(oRespuesta);
        
        }
    }
}