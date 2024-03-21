import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDao } from '../DAO/orderDao';
import { OrderEntity } from '../ENTITY/orderEntity';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  private getOrdersUrl:string =   'http://localhost:8040/order/';             //..+ userId
  private placeOrderUrl:string =  'http://localhost:8040/order/create/';      //.. + {userId}

  fetchOrderHistory(userId:number): Observable<OrderEntity[]>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.get<OrderEntity[]>(this.getOrdersUrl+userId, {headers});
  }

  orderNow(userId:number): Observable<OrderDao>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.post<OrderDao>(this.placeOrderUrl+userId, null, {headers});
  }
}
