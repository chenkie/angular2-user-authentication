import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (this.auth.isAuthenticated() && this.auth.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
