import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AbstractControl, NgForm, FormBuilder, FormControl, Validators, FormGroup  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{


  form: FormGroup = this.formBuilder.group({

    usu_ali: ['', Validators.required],
    usu_nom_com: ['',Validators.required],
    usu_con: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
    usu_cor: ['',Validators.compose([Validators.required, Validators.email])],
    usu_con2: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
    usu_cor2: ['',Validators.compose([Validators.required, Validators.email])],
    usu_cel: ['',Validators.required],
    termsLabel: [Validators.required],    
   
  })


  constructor(public service: UsuarioService,
    private formBuilder: FormBuilder){
  }
  ngOnInit(): void {
    this.resetForm();
  }

  ValidForm(campo : string){
    return this.form.controls[campo].errors&&
           this.form.controls[campo].touched; 
  }

  onSubmit(form: FormGroup){
    if (this.form.invalid){
      this.form.markAllAsTouched();
      this.resetForm(form);
    }
    this.insertRecord(form); 
 
  }


  resetForm(form?: FormGroup){
    if(form != null)
    form.reset();
    this.service.formData = {
      usu_id: null,
      usu_nom_com: "",
      usu_ali: "",
      usu_cor: "",
      usu_con: "",
      usu_cel: "",
      usu_niv_id: null,
      Token:"",
    }
  }

  insertRecord(form: FormGroup){
    console.log(form.value);
    this.service.postUsuario(form.value).subscribe(res =>{
      this.resetForm(form);
      alert("Usuario creado Correctamente.");
    } );
  }

} 
