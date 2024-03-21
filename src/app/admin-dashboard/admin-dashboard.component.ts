import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../ENTITY/userEntity';
import { AdminDashboardService } from '../SERVICE/admin-dashboard-service';
import { ProductEntity } from '../ENTITY/productEntity';
import { DiscountEntity } from '../ENTITY/discountEntity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private adminDashboardService: AdminDashboardService, private router:Router) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllProducts();
    this.getAllDiscounts();
  }

  usersList: UserEntity[] = [];
  getAllUsers() {
    this.adminDashboardService.getUserList().subscribe({
      next: (data) => {
        console.log(data);
        this.usersList = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onDeleteUser(userId: number) {
    this.adminDashboardService.deleteUser(userId).subscribe(
      (result) => {
        if(result!='string'){
          console.log(result);
          alert('User has been Deleted!');
          console.log('User has been Deleted!');
        }
        else{
          alert('Failed to Delete User!!!');
          console.error('Failed to Delete User!!!');
        }
        this.getAllUsers();
    });
  }

  productsList: ProductEntity[] = [];
  getAllProducts() {
    this.adminDashboardService.getProductList().subscribe({
      next: (data) => {
        console.log(data);
        this.productsList = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onDeleteProduct(productId: number) {
    this.adminDashboardService.deleteProduct(productId).subscribe(
      (result) => {
        if(result!='string'){
          console.log(result);
          alert('Product has been Deleted!');
          console.log('Product has been Deleted!');
        }
        else{
          alert('Failed to Delete Product!!!');
          console.error('Failed to Delete Product!!!');
        }
        this.getAllProducts();
    });
  }

  discountsList: DiscountEntity[] = [];
  getAllDiscounts() {
    this.adminDashboardService.getDiscountList().subscribe({
      next: (data) => {
        console.log(data);
        this.discountsList = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onDeleteDiscount(discountId: number) {
    this.adminDashboardService.deleteDiscount(discountId).subscribe(
      (result) => {
        if(result!='string'){
          console.log(result);
          alert('Discount has been Deleted!');
          console.log('Discount has been Deleted!');
        }
        else{
          alert('Failed to Delete Discount!!!');
          console.error('Failed to Delete Dicount!!!');
        }
        this.getAllDiscounts();
    });
  }
}
