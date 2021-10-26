import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseApiUrl = '';

  // .append('Content-Type', 'application/json')
  // .append('Authorization', 'Bearer ' + 'token...')

  constructor(public http: HttpClient) { }

  register(email: string, password: string) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
    return this.http
      .post<any>(this.baseApiUrl + 'user', { email, password }, { headers })
      .pipe(share());
  }
}
