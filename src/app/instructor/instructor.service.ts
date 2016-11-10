import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { API_URL } from './../app.constants';


@Injectable()
export class InstructorService {

  constructor(private http: Http, private authHttp: AuthHttp) { }

  public getInstructors(): Observable<Response> {
    return this.authHttp.get(`${API_URL}/instructors`);
  }

  public addInstructor(data): Observable<Response> {
    return this.authHttp.post(`${API_URL}/instructors`, data);
  }

}
