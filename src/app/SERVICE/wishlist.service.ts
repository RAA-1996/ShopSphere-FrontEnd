import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishlistEntity } from '../ENTITY/wishlistEntity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  private wishlistUrl: string =               'http://localhost:8040/wishlist/';                 //.. + {userId}
  private addToWishlistUrl:string =           'http://localhost:8040/wishlist/';                 //.. + {userId} / add
  private removeFromWishlistUrl:string =      'http://localhost:8040/wishlist/';                 //.. + {userId} / remove / {productId}

  userId:any = localStorage.getItem('userId');

  httpOptions = {
    headers: new HttpHeaders({Accept: 'text/plain'}),
    params: new HttpParams(),
    responseType: 'text' as 'json'
  };

  addToWishlist(userId:number, productId:number): Observable<WishlistEntity>
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

    return this.http.post<WishlistEntity>(this.addToWishlistUrl + userId + '/add', {}, this.httpOptions);
  }

  getWishlistList(userId:any): Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.get<any>(this.wishlistUrl+userId, {headers});
  }

  removeFromWishlist(wishlistId:number): Observable<string>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.delete(this.removeFromWishlistUrl+this.userId+'/remove/'+wishlistId, {headers, responseType:'text'});
  }

}
