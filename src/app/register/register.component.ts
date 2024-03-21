import { Component } from '@angular/core';
import { RegisterService } from '../SERVICE/register.service';
import { TokenService } from '../SERVICE/token-service';
import { NameDao } from '../DAO/nameDao';
import { AddressDao } from '../DAO/addressDao';
import { RegisterDao } from '../DAO/registerDao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private registerService:RegisterService, private tokenService: TokenService, private router:Router) {}

  username: string = '';
  email: string = '';
  password: string = '';
  fname: string = '';
  lname: string = '';
  city: string = '';
  street: string = '';
  houseNumber: string = '';
  zipcode: string = '';
  mobile: string = '';
  role: string = '';

  onRegister() {
    const name: NameDao = {
      fname: this.fname,
      lname: this.lname,
    };
    const address: AddressDao = {
      city: this.city,
      street: this.street,
      houseNumber: this.houseNumber,
      zipcode: this.zipcode,
    };

    const registerDao: RegisterDao = {
      username: this.username,
      email: this.email,
      password: this.password,
      name: name,
      address: address,
      mobile: this.mobile,
      role: this.role,
    };

    console.log(registerDao);
    this.registerService.register(registerDao).subscribe(
      (data) => {
        // if(data.role === 'ADMIN') {
        //   console.log(data);
        //   localStorage.setItem('token', data.token);    //save token in local storage
        //   localStorage.setItem('tokenValid', 'true');   //set token to true
        //   localStorage.setItem('role', 'ADMIN');        //set role to local storage
        //   this.router.navigate(['/login']);
        // }
        // else {
        //   console.log(data);
        //   localStorage.setItem('token', data.token);    //save token in local storage
        //   localStorage.setItem('tokenValid', 'true');   //set token to true
        //   localStorage.setItem('role', 'USER');         //set role to local storage
        //   this.router.navigate(['']);
        // }

        console.log(data);
        alert('Register Success!');
        // localStorage.setItem('token', data.token);    //save token in local storage
        // localStorage.setItem('tokenValid', 'true');   //set token to true
        // localStorage.setItem('role', data.role);      //set role to local storage
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
