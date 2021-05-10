using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.Security.Cryptography;


namespace IndexTF3.Models.WS
{
    public class Encrypt
    {
        public static string GetSHA256(string clave)
        {
            SHA256 sha256 = SHA256Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha256.ComputeHash(encoding.GetBytes(clave));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();
        }

        public static bool CompareSHA256(string clave, string cifrada)
        {
            clave = GetSHA256(clave);
            if (clave.CompareTo(cifrada) == 1)
            {
                return true;
            }
            return false;
        }
    }
}