import { Injectable } from '@angular/core';
import { LoginDao } from '../DAO/loginDao';
import { LoginResponseDao } from '../DAO/loginResponseDao';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUrl: string = 'http://localhost:8040/auth/login';
  getUserIdUrl:string = 'http://localhost:8040/user/getUserId';

  login(loginDao: LoginDao): Observable<LoginResponseDao> {
    console.log(loginDao);
    return this.http.post<LoginResponseDao>(this.loginUrl, loginDao);
  }

  getUserId(email:string)
  {
    return this.http.get<number>(this.getUserIdUrl+'/'+email)
  }
}
