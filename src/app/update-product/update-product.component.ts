import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDashboardService } from '../SERVICE/admin-dashboard-service';
import { ProductEntity } from '../ENTITY/productEntity';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private adminDashboardService: AdminDashboardService, private router: Router) {}

  private pidUpdated: number = 0;
  categoryList = ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

  priceChange(event:any)
  {
    let num = Number(event.target.value);
    this.price = num;
  }

  ngOnInit(): void {
    this.pidUpdated = this.activatedRoute.snapshot.params['productId'];
    this.adminDashboardService.getOneProduct(this.pidUpdated).subscribe(
      (result: ProductEntity) => {
        this.productEntity = result;

        console.log(this.productEntity);
      });
    this.productEntity.productId = this.pidUpdated;
  }

  productId: number = 0;
  title: string = '';
  price: number = 0;
  description: string = '';
  category: string = '';
  image: string = '';

  productEntity: ProductEntity = {
    productId: this.productId,
    title: this.title,
    price: this.price,
    description: this.description,
    category: this.category,
    image: this.image,
  };

  onUpdateProduct()
  {
    this.adminDashboardService.updateProduct(this.pidUpdated, this.productEntity).subscribe( 
      (result:ProductEntity)=> {
      this.productEntity = result;
      alert('Product has been Updated!');
      console.log('Product has been Updated!');
      this.router.navigate(['admin']);
    },
      (error) => {
        alert("Failed to Update...");
        // this.router.navigate(['admin']);
    }
    );
  }

}
