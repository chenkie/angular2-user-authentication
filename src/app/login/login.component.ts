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
    this.auth.login(credentials)
      .map(res => res.json())
      .subscribe(
        response => this.auth.finishAuthentication(response.token),
        error => this.errorMessage = error.json().message
      );
  }

  onSignupSubmit(credentials) {
    this.auth.signup(credentials)
      .map(res => res.json())
      .subscribe(
        response => this.auth.finishAuthentication(response.token),
        error => this.errorMessage = error.json().message
      );
  }

}
