using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using IndexTF3.Models;
using IndexTF3.Models.WS;

namespace IndexTF3.Controllers
{
    public class usuariosController : ApiController
    {
        private mis_viajesEntities db = new mis_viajesEntities();

        // GET: api/usuarios
        public IQueryable<Usuarios> Getusuario()
        {
            return db.Usuarios;
        }

        // GET: api/usuarios/5
        [ResponseType(typeof(Usuarios))]
        public IHttpActionResult Getusuario(int id)
        {
            Usuarios usuario = db.Usuarios.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }

            return Ok(usuario);
        }

        // PUT: api/usuarios/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putusuario(int id, Usuarios usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usuario.usu_id)
            {
                return BadRequest();
            }

            db.Entry(usuario).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!usuarioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/usuarios
        [ResponseType(typeof(Usuarios))]
        public IHttpActionResult Postusuario(Usuarios usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Usuarios.Add(usuario);

            try
            {
                
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (usuarioExists(usuario.usu_id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = usuario.usu_id }, usuario);
        }

        // DELETE: api/usuarios/5
        [ResponseType(typeof(Usuarios))]
        public IHttpActionResult Deleteusuario(int id)
        {
            Usuarios usuario = db.Usuarios.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }

            db.Usuarios.Remove(usuario);
            db.SaveChanges();

            return Ok(usuario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool usuarioExists(int id)
        {
            return db.Usuarios.Count(e => e.usu_id == id) > 0;
        }

        //api/usuaruio/login
        [HttpPost]
        public Loggin Login(string email, string password)
        {
            Loggin oRespuesta = new Loggin();
            using (mis_viajesEntities db = new mis_viajesEntities())
            {
                var lista = db.Usuarios.Where(a => a.usu_cor == email && a.usu_con == password).ToList();
                if (lista.Count() > 0)
                {
                    oRespuesta.Resultado = 1;
                    oRespuesta.Mensaje = "Login correcto";
                }
                else
                {
                    oRespuesta.Resultado = 0;
                    oRespuesta.Mensaje = "Login incorrecto";
                }
            }

            return oRespuesta;
        }
    }
}