import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private http: HttpClient) {}

  logoutUrl: string = 'http://localhost:8040/auth/logout';

  logout(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    console.log('User Logged Out');

    return this.http.post<any>(this.logoutUrl, null, { headers: headers });
  }
}
