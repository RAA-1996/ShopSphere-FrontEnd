import { Component } from '@angular/core';
import { AdminDashboardService } from '../SERVICE/admin-dashboard-service';
import { ProductDao } from '../DAO/productDao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  constructor(private adminDashboardService:AdminDashboardService, private router:Router){};

  // productId:number = 0;
  title:string = '';
  price:number = 0;
  description:string = '';
  category:string = '';
  image:string = '';

  categoryList = ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];
  // selectCategory(category:string)
  // {

  // }

  priceChange(event:any)
  {
    let num = Number(event.target.value);
    this.price = num;
  }

  onAddProduct()
  {
    const productDao:ProductDao = {
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image
    };

    console.log(productDao);
    this.adminDashboardService.addProduct(productDao).subscribe(
      (data) => {
        console.log(data);
        alert("Product has been added!");
        this.router.navigate(['admin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
