import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscountDao } from '../DAO/discountDao';
import { CartEntity } from '../ENTITY/cartEntity';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor(private http:HttpClient) {}

  private cartUrl: string =               'http://localhost:8040/cart/';                 //.. + {userId}
  private addToCartUrl:string =           'http://localhost:8040/cart/';                 //.. + {userId} / add
  private removeFromCartUrl:string =      'http://localhost:8040/cart/';                 //.. + {userId} / remove / {productId}

  private applyDiscountCodeUrl:string =   'http://localhost:8040/discount/code/';        //.. + {discountCode}
  
  productId:number = 0;
  discountCode:string = '';

  httpOptions = {
    headers: new HttpHeaders({Accept: 'text/plain'}),
    params: new HttpParams(),
    responseType: 'text' as 'json'
  };

  getCartList(userId:any): Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.get<any>(this.cartUrl+userId, {headers});
  }

  applyDiscount(discountCode:string): Observable<DiscountDao>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.get<DiscountDao>(this.applyDiscountCodeUrl+discountCode, {headers});
  }

  addToCart(userId:number, productId:number): Observable<CartEntity>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    this.httpOptions.headers = headers;
    this.httpOptions.params = new HttpParams();
    this.httpOptions.params = this.httpOptions.params.append('productId', productId);

    console.log(this.httpOptions);
    console.log('HERE:'+userId);
    console.log('HERE:'+productId);

    return this.http.post<CartEntity>(this.addToCartUrl + userId + '/add', {}, this.httpOptions);
  }

  // removeFromCart(cartId:number): Observable<string>
  // {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'Authorization':'Bearer '+token
  //   });

  //   return this.http.delete(this.removeFromCartUrl+userId+'/remove/'+productId, {headers, responseType:'text'});
  // }

  userId:any = localStorage.getItem('userId');
  removeFromCart(cartId:number): Observable<string>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.delete(this.removeFromCartUrl+this.userId+'/remove/'+cartId, {headers, responseType:'text'});
  }

}
