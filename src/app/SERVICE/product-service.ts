import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDao } from '../DAO/productDao';
import { ProductEntity } from '../ENTITY/productEntity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private productUrl:string = 'http://localhost:8040/product/fetch';

  getAllProducts()
  {
    const productUrl:string = this.productUrl;
    // return this.http.get<ProductDao[]>(productUrl);
    return this.http.get<ProductEntity[]>(productUrl);
  }

}
