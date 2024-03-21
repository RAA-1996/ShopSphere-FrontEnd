import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  private productdetailUrl:string = 'http://localhost:8040/product/fetch';

  getProductDetailsById(id:number)
  {
    const productById:string = this.productdetailUrl+id;
    return this.http.get<any>(productById);
  }

}
