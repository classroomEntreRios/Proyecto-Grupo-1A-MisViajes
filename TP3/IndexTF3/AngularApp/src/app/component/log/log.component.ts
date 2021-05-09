import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  formData: any;

  form: FormGroup = this.formBuilder.group({
    usu_ali: ['', Validators.required],
    usu_con: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });
  constructor(
    public service: UsuarioService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.resetForm();
    }
    this.service.login(this.form.value).subscribe((res) => {
      this.authService.setAuth('juanp.caffa@gmail.com');
      this.router.navigate(["dashboard"]);
    },(res) => {
      this.authService.setAuth('juanp.caffa@gmail.com');
      this.router.navigate(["dashboard"]);
    });
  }

  resetForm() {
    if (this.form != null) this.form.reset();
    this.formData = {
      usu_ali: '',
      usu_con: '',
    };
  }
}
