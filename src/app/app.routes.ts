import { Routes } from '@angular/router';
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
  { path: 'instructor', component: InstructorComponent, canActivate: [AuthGuard] },
  { path: 'instructor/new', component: NewInstructorComponent, canActivate: [RoleGuard] },
  { path: 'profile', component: ProfileComponent }
];