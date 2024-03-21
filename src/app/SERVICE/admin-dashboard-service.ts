import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../ENTITY/userEntity';
import { ProductEntity } from '../ENTITY/productEntity';
import { DiscountEntity } from '../ENTITY/discountEntity';
import { ProductDao } from '../DAO/productDao';
import { DiscountDao } from '../DAO/discountDao';
// import { RegisterDao } from '../DAO/registerDao';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http:HttpClient) { }

  allUsersUrl:string = 'http://localhost:8040/admin/users';
  deleteUserUrl:string = 'http://localhost:8040/admin/delete';
  allProductsUrl:string = 'http://localhost:8040/product/fetch';
  deleteProductUrl:string = 'http://localhost:8040/product/delete';
  allDiscountsUrl:string = 'http://localhost:8040/discount/get';
  deleteDiscountUrl:string = 'http://localhost:8040/discount/delete';

  updateUserUrl:string = 'http://localhost:8040/admin/update';
  updateProductUrl:string = 'http://localhost:8040/product/update';
  updateDiscountUrl:string = 'http://localhost:8040/discount/update';

  addProductUrl:string = 'http://localhost:8040/product/insert';
  addDiscountUrl:string = 'http://localhost:8040/discount/add';

  getOneUserUrl:string = 'http://localhost:8040/admin/users/';
  getOneProductUrl:string = 'http://localhost:8040/product/fetch/';
  getOneDiscountUrl:string = 'http://localhost:8040/discount/getOne/';

  // httpOptions = {
  //   headers: new HttpHeaders({ Accept: 'text/plain' }),
  //   responseType: 'text' as 'json',
  // };

  getUserList(): Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.get<UserEntity[]>(this.allUsersUrl, {headers});
  }

  deleteUser(userId:number): Observable<string>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.delete(this.deleteUserUrl+'/'+userId, {headers, responseType:'text'});
  }

  getOneUser(userId:number)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.get<UserEntity>(this.getOneUserUrl+userId, {headers});
  }

  updateUser(userId:number, userEntity:UserEntity)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.put<UserEntity>(this.updateUserUrl+'/'+userId, userEntity, {headers});
  }


  getProductList(): Observable<any>
  {
    return this.http.get<ProductEntity[]>(this.allProductsUrl);
  }

  deleteProduct(productId:number): Observable<string>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.delete(this.deleteProductUrl+'/'+productId, {headers, responseType:'text'});
  }

  getOneProduct(productId:number)
  {
    return this.http.get<ProductEntity>(this.getOneProductUrl+productId)
  }

  updateProduct(productId:number, productEntity:ProductEntity)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.put<ProductEntity>(this.updateProductUrl+'/'+productId, productEntity, {headers});
  }

  addProduct(productDao:ProductDao): Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.post<any>(this.addProductUrl, productDao, {headers});
  }


  getDiscountList(): Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.get<DiscountEntity[]>(this.allDiscountsUrl, {headers});
  }

  deleteDiscount(discountId:number): Observable<string>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.delete(this.deleteDiscountUrl+'/'+discountId, {headers, responseType:'text'});
  }

  getOneDiscount(discountId:number)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.get<DiscountEntity>(this.getOneDiscountUrl+discountId, {headers})
  }

  updateDiscount(discountId:number, discountEntity:DiscountEntity)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.put<DiscountEntity>(this.updateDiscountUrl+'/'+discountId, discountEntity, {headers});
  }

  addDiscount(discountDao:DiscountDao): Observable<any>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.post<any>(this.addDiscountUrl, discountDao, {headers});
  }


}
