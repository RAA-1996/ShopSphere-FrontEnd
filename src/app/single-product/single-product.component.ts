import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleProductService } from '../SERVICE/single-product.service';
import { ProductDao } from '../DAO/productDao';
import { ProductEntity } from '../ENTITY/productEntity';
import { CartService } from '../SERVICE/cart-service';
import { Observable } from 'rxjs';
import { WishlistService } from '../SERVICE/wishlist.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent {
  constructor(
    private activateRoute: ActivatedRoute,
    private service: SingleProductService,
    private router: Router,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  // private productId:number = 0;
  // product?:ProductDao;
  product?: ProductEntity;
  productId: number = 0;
  userId: number = parseInt(localStorage.getItem('userId') || '0');
  cartProductId = parseInt(
    this.activateRoute.snapshot.paramMap.get('productId') || ''
  );

  ngOnInit() {
    const productId = parseInt(
      this.activateRoute.snapshot.paramMap.get('productId') || ''
    );
    this.service.getProductDetailsById(productId).subscribe({
      next: (data) => {
        console.log(data);
        this.product = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  isLoggedIn() {
    return localStorage.getItem('token');
  }

  onAddToCart(productId: number) {
    // if(this.productId && this.userId !== 0) {
    productId = this.cartProductId;

    this.cartService.addToCart(this.userId, productId).subscribe(
      (result) => {
        console.log(result);
        //
        console.log('Product added to Cart!');
        alert('Product added to Cart!');
        this.router.navigate(['cart']);
      },
      (error) => {
        console.log(this.userId);
        console.log(productId);

        console.log(error);
        console.log('Failed to add to Cart...');
        alert('Failed to add to Cart...');
      }
    );
    // }

    // alert("Product added to Cart!");
    // this.router.navigate(['cart']);
  }

  onAddToWishlist(productId: number) {
    productId = this.cartProductId;

    this.wishlistService.addToWishlist(this.userId, productId).subscribe(
      (result) => {
        console.log(result);
        console.log('Product added to Wishlist!')
        alert('Product added to Wishlist!');
        this.router.navigate(['wishlist']);
      },
      (error) => {
        console.log(error);
        console.log('Failed to add to Wishlist...');
        alert('Failed to add to Wishlist...');
      }
    );
  }
}
