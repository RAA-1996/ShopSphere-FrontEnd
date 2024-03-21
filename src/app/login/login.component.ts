import { Component } from '@angular/core';
import { LoginDao } from '../DAO/loginDao';
import { LoginService } from '../SERVICE/login.service';
import { TokenService } from '../SERVICE/token-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private tokenService: TokenService, private router:Router) {}

  email: string = '';
  password: string = '';

  onLogin() {
    const loginDao: LoginDao = {
      email: this.email,
      password: this.password,
    };

    //Get the userId through their email:
    this.loginService.getUserId(loginDao.email).subscribe(
      userId => {
        localStorage.setItem('userId', JSON.stringify(userId));
        console.log(userId);
        console.log(localStorage.getItem('userId'));
      },
      error => {
        alert('Failed to get userId...');
      }
    )

    console.log(loginDao);
    this.loginService.login(loginDao).subscribe(
      (data) => {
        if(data.role === 'ADMIN') {
          console.log(data);
          localStorage.setItem('token', data.token);    //save token in local storage
          localStorage.setItem('tokenValid', 'true');   //set token to true
          localStorage.setItem('role', 'ADMIN');        //set role to local storage
          this.router.navigate(['/admin']);
        }
        else {
          console.log(data);
          localStorage.setItem('token', data.token);    //save token in local storage
          localStorage.setItem('tokenValid', 'true');   //set token to true
          localStorage.setItem('role', 'USER');         //set role to local storage
          this.router.navigate(['']);
        }
      },
      (error) => {
        console.log(error);
        alert("Login Failed...");
      }
    );
  }
}
