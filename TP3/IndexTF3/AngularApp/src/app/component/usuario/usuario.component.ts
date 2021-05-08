/*import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm, FormBuilder, FormControl, Validators, FormGroup  } from '@angular/forms';
import { from } from 'rxjs';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  //formBuilder = new FormControl('');

  form: FormGroup = this.formBuilder.group({
 
    usu_nom: [''],
    usu_ape: [''],
    usu_cor: [''],
    usu_cel: [''],

  })
  

  //constructor() { }
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
      usu_nom: "",
      usu_ape: "",
      usu_cor: "",
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


---------------------

export class RegistroComponent implements OnInit {

  form: FormGroup;

  constructor(public service: UsuarioService, private formBuilder: FormBuilder){
 
    this.form = formBuilder.group({
      usu_ali: ['',[Validators.required, Validators.pattern('([a-zA-Z]+) ([a-zA-Z]+)')]],
      usu_nom_com: ['',Validators.required],
      usu_con: ['',[Validators.required, Validators.minLength(6)]],
      usu_cor: ['',[Validators.required, Validators.email]],
      usu_cel: ['',Validators.required],
      usu_con2: ['',[Validators.required, Validators.minLength(6)]],
      usu_cor2: ['',[Validators.required, Validators.email]],
  
    })
  }
  CampoValido(campo: string){
    return this.form.controls[campo].errors &&
          this.form.controls[campo].touched;
    
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
    if (this.form.invalid){
      this.form.markAllAsTouched();
      this.resetForm(form);
    }else{
    //this.insertRecord(form);
    this.resetForm(form);
    }
   
    
  }

  insertRecord(form: NgForm){
    this.service.postUsuario(form.value).subscribe(res => {
      this.resetForm(form);
    })
  }
}


*/