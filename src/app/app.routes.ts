import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InstructorComponent } from './instructor/instructor.component';
import { NewInstructorComponent } from './new-instructor/new-instructor.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/authguard.service';
import { RoleGuard } from './auth/roleguard.service';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // guard the /instructor route with the canActivate hook
  { path: 'instructor', component: InstructorComponent },
  // guard the /instructor/new route with the canActivate hook
  // check that the user is authenticated and is an admin
  { path: 'instructor/new', component: NewInstructorComponent },
  { path: 'profile', component: ProfileComponent }
];