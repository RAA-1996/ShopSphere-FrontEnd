import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../SERVICE/category-service';
import { ProductDao } from '../DAO/productDao';
import { ProductEntity } from '../ENTITY/productEntity';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {
  }

  category: string = 'men\'s clothing';
  // product: ProductDao[] = [];
  product: ProductEntity[] = [];

  ngOnInit() {
    this.categoryService.getProductsByCategory(this.category).subscribe({
      next: (data) => {
        this.product = data;
      },
    });
  }

  changeCategory(data: any) {
    this.categoryService.getProductsByCategory(data).subscribe({
      next: (data) => {
        this.product = data;
      },
    });
  }
}
