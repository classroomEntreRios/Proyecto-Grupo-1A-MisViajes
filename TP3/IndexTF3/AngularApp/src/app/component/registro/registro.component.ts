import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm, FormBuilder, FormControl, Validators, FormGroup  } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    /*
    usu_nom: [''],
    usu_ape: [''],
    usu_cor: [''],
    usu_cel: [''],
    */
	  usu_ali: [''],
  	usu_nom_com: [''],
	  usu_con: [''],
	  usu_cor: [''],
	  su_cel: [''],

  })

  constructor(public service: UsuarioService, private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      usu_id: null,
      usu_nom_com: "",
      usu_ali: "",
      usu_cor: "",
      usu_con: "",
      usu_cel: "",
      usu_niv_id: null,
    }
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postUsuario(form.value).subscribe(res => {
      this.resetForm(form);
    })
  }
}
