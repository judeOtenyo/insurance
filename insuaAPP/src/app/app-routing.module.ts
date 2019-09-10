import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  { path: 'Home', component: LandingComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Portal', component: PortalComponent },
  { path: 'Admin', component: AdminPageComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
