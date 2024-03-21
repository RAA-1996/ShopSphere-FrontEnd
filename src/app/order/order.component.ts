import { Component, OnInit } from '@angular/core';
import { OrderService } from '../SERVICE/order.service';
import { Router } from '@angular/router';
import { OrderDao } from '../DAO/orderDao';
import { OrderEntity } from '../ENTITY/orderEntity';
import { NameDao } from '../DAO/nameDao';
import { AddressDao } from '../DAO/addressDao';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  userId = parseInt(localStorage.getItem('userId') || '0');
  orderResponse:OrderDao[] = [];
  orderEntityList:OrderEntity[] = [];

  ngOnInit(): void {
    
    this.getAllOrders(this.userId);
  }

  // orderId:number = 0;
  // // userId:number = 0;
  // username:string = '';
  // email:string = '';
  // mobile:string = '';
  // role:string = '';

  // fname:string = '';
  // lname:string = '';

  // city:string = '';
  // street:string = '';
  // houseNumber:string = '';
  // zipcode:string = '';

  // nameDao:NameDao = {
  //   fname: this.fname,
  //   lname: this.lname,
  // }

  // addressDao:AddressDao = {
  //   city: this.city,
  //   street: this.street,
  //   houseNumber: this.houseNumber,
  //   zipcode: this.zipcode
  // }

  // orderEntity:OrderEntity = {
  //   orderId: this.orderId,
  //   userId: this.userId,
  //   username: this.username,
  //   email: this.email,
  //   name: this.nameDao,
  //   address: this.addressDao,
  //   mobile: this.mobile,
  //   role: this.role,
  //   productList: ProductDao[];
  // }


  constructor(private orderService:OrderService) {

    // orderService.fetchOrderHistory(this.userId).subscribe(
    //   data => {
    //     console.log(data)
    //   },
    //   error => {
    //     console.log(error);
    //     alert('Failed to get Orders...');
    //   }
    // )

  }



  getAllOrders(userId:number)
  {
    this.orderService.fetchOrderHistory(userId).subscribe(
      (result:OrderEntity[]) => {
        // console.log(result)
        this.orderEntityList = result;
        console.log(this.orderEntityList)
      },
      (error) => {
        console.log(error);
      }
    )
  }


}
