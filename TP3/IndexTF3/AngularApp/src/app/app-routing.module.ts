import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

  {path: '**',
  redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
