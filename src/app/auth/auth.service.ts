import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
import { API_URL } from './../app.constants';
import * as jwtDecode from 'jwt-decode';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) { }

  login(credentials): void {
    // return a POST request to /users/authenticate endpoint with
    // credentials passed in
  }

  signup(credentials): void {
    // return a POST request to the /users enedpoint with
    // the credentials passed in
  }

  finishAuthentication(token): void {
    // save the returned token in local storage
    // and redirect the user to the home route
  }

  logout(): void {
    // remove the token from local storage
  }

}
