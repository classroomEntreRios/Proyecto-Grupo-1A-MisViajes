import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './component/index/index.component';
import { LogComponent } from './component/log/log.component';
import { RegistroComponent } from './component/registro/registro.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileComponent } from './component/dashboard/profile/profile.component';
import { InicioComponent } from './component/dashboard/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LogComponent,
    RegistroComponent,
    DashboardComponent,
    NavbarComponent,
    ProfileComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
