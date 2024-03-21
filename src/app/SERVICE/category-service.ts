import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDao } from '../DAO/productDao';
import { ProductEntity } from '../ENTITY/productEntity';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  private categoryUrl:string = 'http://localhost:8040/product/fetch/category/';

  getProductsByCategory(category:string)
  {
    const productUrl:string = this.categoryUrl+category;
    // return this.http.get<ProductDao[]>(productUrl);
    return this.http.get<ProductEntity[]>(productUrl);
  }

}
