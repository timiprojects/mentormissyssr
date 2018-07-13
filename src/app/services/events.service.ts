import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getLatestEvent () {
    return this.http.get('https://mmissy.herokuapp.com/api/v1/latest/');
  }

  getAll() {
    return this.http.get('https://mmissy.herokuapp.com/api/v1/event/');
  }

  sendMail (body: any) {
    return this.http.get('https://miteda.herokuapp.com/mail/send' + body, this.httpOptions);
  }
}

