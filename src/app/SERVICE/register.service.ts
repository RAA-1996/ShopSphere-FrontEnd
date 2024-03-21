import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterDao } from '../DAO/registerDao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUrl: string = 'http://localhost:8040/auth/register';

  httpOptions = {
    headers: new HttpHeaders({ Accept: 'text/plain' }),
    responseType: 'text' as 'json',
  };

  register(registerDao: RegisterDao): Observable<any> {
    return this.http.post<any>(this.registerUrl, registerDao, this.httpOptions);
  }
}
