import { Component } from '@angular/core';
import { ProductService } from '../SERVICE/product-service';
import { ProductDao } from '../DAO/productDao';
import { ProductEntity } from '../ENTITY/productEntity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private productService:ProductService)
  {
    productService.getAllProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.data = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // data:ProductDao[] = [];
  data:ProductEntity[] = [];

}
