import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { InicioComponent } from './component/dashboard/inicio/inicio.component';
import { ProfileComponent } from './component/dashboard/profile/profile.component';
import { IndexComponent } from './component/index/index.component';
import { LogComponent } from './component/log/log.component';
import { RegistroComponent } from './component/registro/registro.component';


const routes: Routes = [
//Componente Index
{path: '',
component:IndexComponent,
  pathMatch: 'full'},

  {path: 'login',
  component: LogComponent},

  {path: 'registro',
  component: RegistroComponent},

  {path: 'dashboard',
  component: DashboardComponent,
  children: [
    {path:  '',
    component: InicioComponent,
    pathMatch: 'prefix'
    },
    {path: 'perfil',
    component: ProfileComponent},
  ]
  },

  {path: '**',
  redirectTo: ''},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
