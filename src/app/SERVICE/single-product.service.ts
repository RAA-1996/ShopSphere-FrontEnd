import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDao } from '../DAO/productDao';
import { ProductEntity } from '../ENTITY/productEntity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleProductService {

  constructor(private http:HttpClient) {}

  private baseUrl:string = 'http://localhost:8040/product/fetch';

  getProductDetailsById(productId:number): Observable<ProductEntity>
  {
    console.log("Called...");
    const productUrl:string = this.baseUrl+'/'+productId;
    // return this.http.get<ProductDao>(productUrl);
    return this.http.get<ProductEntity>(productUrl);
  }

}
