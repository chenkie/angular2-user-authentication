import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { InstructorService } from './instructor.service';
import { Instructor } from './instructor';
import 'rxjs/add/operator/map';
import * as md5 from 'md5';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  instructors: Instructor[];
  errorMessage: string;

  constructor(private instructorService: InstructorService, private auth: AuthService) { }

  ngOnInit() {
    this.getInstructors();
  }

  private getInstructors() {
    this.instructorService.getInstructors()
      .map(response => response.json())
      .subscribe(
        data => this.instructors = data,
        error => this.errorMessage = error.json().message
      );
  }

  private getGravatar(email) {
    return `https://www.gravatar.com/avatar/${md5(email).toLowerCase().trim()}`;
  }

}
