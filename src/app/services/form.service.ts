// src/app/services/form.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  login(uname: string, password: string) {
    const url = 'your end url';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api_key' :'yourapikey' 
    });

    const body = {
      uname,
      password
    };

    return this.http.post(url, body, { headers });
  }
}
