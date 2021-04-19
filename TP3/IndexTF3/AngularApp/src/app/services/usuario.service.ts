import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { from, observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  //providedIn: 'app-module'
  providedIn: 'root'
})
export class UsuarioService {

  formData: Usuario;
  readonly rootURL = 'https://localhost:44350/api'

  //constructor() {  }
  constructor(private http : HttpClient){ }
  postUsuario(formData: Usuario){
    return this.http.post(this.rootURL+'/usuarios', formData);
  }
}
