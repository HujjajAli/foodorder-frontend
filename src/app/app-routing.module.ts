import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginRegisterComponent},
  {path:'search/:searchItems',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
