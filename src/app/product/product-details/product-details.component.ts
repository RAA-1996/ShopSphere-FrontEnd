import { Component, Input } from '@angular/core';
import { ProductDao } from 'src/app/DAO/productDao';
import { ProductEntity } from 'src/app/ENTITY/productEntity';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  // @Input()
  // product?:ProductDao;

  @Input()
  productEntity?:ProductEntity;

}
