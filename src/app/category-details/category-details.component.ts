import { Component, Input } from '@angular/core';
import { ProductDao } from '../DAO/productDao';
import { ProductEntity } from '../ENTITY/productEntity';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent {

  // @Input()
  // product?:ProductDao;

  @Input()
  productEntity?:ProductEntity;

}
