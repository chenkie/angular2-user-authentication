import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  payload: Object;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    // decode the JWT payload to get access
    // to the user's profile
  }

}
