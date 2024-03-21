import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../SERVICE/wishlist.service';
import { WishlistEntity } from '../ENTITY/wishlistEntity';
import { CartEntity } from '../ENTITY/cartEntity';
import { NewProductEntity } from '../ENTITY/newProductEntity';
import { Router } from '@angular/router';
import { SingleProductService } from '../SERVICE/single-product.service';
import { ProductEntity } from '../ENTITY/productEntity';
import { WishNewProductEntity } from '../ENTITY/wishNewProductEntity';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{

  constructor(private wishlistService:WishlistService, private router:Router, private singleProductService:SingleProductService) {}

  ngOnInit(): void {
    
    this.getAllWishlists(this.userId);
  }

  cartList: CartEntity[] = [];
  wishlistList: WishlistEntity[] = [];
  // productList: NewProductEntity[] = [];
  productList: WishNewProductEntity[] = [];
  userId:any = localStorage.getItem('userId');
  productId:number = 0;

  getAllWishlists(userId:any)
    {
      this.wishlistService.getWishlistList(this.userId).subscribe(
        (result: WishlistEntity[]) => {
          this.wishlistList = result;
          for(let p of this.wishlistList)
          {
            this.productId = p.productId;
          }
          for(let i of this.wishlistList)
          {
            this.loadSingleProduct(i.productId, i.wishlistId);
          }
          console.log(this.wishlistList);
          console.log(this.productList)
        },
        error => {
          console.log("Failed to get the wishlistList...")
        }
      )
    }

    loadSingleProduct(productId:number, wishlistId:number): void
    {
      this.singleProductService.getProductDetailsById(productId).subscribe(
        (result:ProductEntity) => {
          const newProductList = {
            wishlistId:wishlistId,
            productId:result.productId,
            title:result.title,
            price:result.price,
            image:result.image
          };
          console.log(result)

          this.productList.push(newProductList);
        }
      )
    }

    onRemoveFromWishlist(wishlistId:number)
    {
      console.log(wishlistId)
      this.wishlistService.removeFromWishlist(wishlistId).subscribe(
        (result) => {
          console.log(result);
          console.log(this.productId);
          console.log(wishlistId);
          alert('Product has been removed from Wishlist!');

          this.cartList.length = 0;
          this.productList.length = 0;
          // this.getAllWishlists(this.userId);
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert('Failed to remove product from Wishlist...');
        })
    }

}
