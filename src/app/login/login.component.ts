import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string;

  constructor(private auth: AuthService) { }

  onLoginSubmit(credentials) {
    // call the login method on the AuthService
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful
  }

  onSignupSubmit(credentials) {
    // call the signup method on the AuthService
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful
  }

}
