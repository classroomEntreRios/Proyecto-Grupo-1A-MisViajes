import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';




@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  log: Usuario;
  notFound = false;

  form: FormGroup = this.formBuilder.group({
    usu_cor: ['', Validators.required],
    usu_con: ['', Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });
  constructor(
    public service: UsuarioService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.resetForm(form);
    }
    this.insertRecord(form);
    
    /*this.service.login(this.form.value).subscribe(
      (res) => {
        //this.authService.setAuth('juanp.caffa@gmail.com');
        this.authService.setAuth(this.form.value.usu_cor);
        this.router.navigate(['dashboard']);
      },
      (err) => {
        this.authService.setAuth(this.form.value.usu_cor);
        //this.router.navigate(['']);
        alert('Error al iniciar sesión')
      }
    );*/
  }

   
  ValidForm(campo : string){
    return this.form.controls[campo].errors&&
           this.form.controls[campo].touched; 
  }

  resetForm(form? : FormGroup) {
    if (form != null) 
    form.reset();
    this.service.formLog = {
      usu_cor: '',
      usu_con: '',
    };
  }

  insertRecord(form: FormGroup){
    console.log(form.value);
    this.service.login(form.value).subscribe((oRespuesta:Usuario) =>{
      this.log = oRespuesta;
      console.log(this.log);
    }, (err => {
      console.error(err);
      this.notFound = true;
    })

    );
  }
}
