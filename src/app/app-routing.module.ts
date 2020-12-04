import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' }, 
{path:'**',redirectTo:'AppComponent'},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'Home',component:HomeComponent},
{path:'Profile',component:ProfileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
