import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../SERVICE/logout.service';
import { Router } from '@angular/router';
import { CartService } from '../SERVICE/cart-service';
import { CartEntity } from '../ENTITY/cartEntity';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit{

  constructor(private logoutService:LogoutService, private router:Router, private cartService:CartService)
  {
  //  this.isloggedInUpdate =  this.isLoggedIn() >0 ;
  }

  // cartList:CartEntity[] = [];

  ngOnInit(): void {

    // if(this.isLoggedIn())
    // {
    //   this.getAllCarts(this.userId);
    // }
  }

  // userId:any = localStorage.getItem('userId');
  // getAllCarts(userId:any)
  // {
  //   this.cartService.getCartList(this.userId).subscribe(
  //     (result: CartEntity[]) => {
  //       this.cartList = result;
  //       console.log(this.cartList);
  //     },
  //     error => {
  //       console.log("Failed to get the cartList from Navbar...")
  //     }
  //   )
  // }


  isloggedInUpdate:boolean = false;

  isLoggedIn() 
  {
    return localStorage.getItem('token');
  }

  onLogout()
  {
    console.log("Logout Done!");
    this.logoutService.logout(localStorage.getItem('token')||'').subscribe(
      (data) => {
        console.log(data);
        localStorage.clear();
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
        localStorage.clear();
      }
    );
  }

  isUser()
  {
    return localStorage.getItem('role') === 'USER';
  }

  isAdmin()
  {
    return localStorage.getItem('role') === 'ADMIN';
  }

}
