import { Component, OnInit } from '@angular/core';
import { CartService } from '../SERVICE/cart-service';
import { Router } from '@angular/router';
import { ProductEntity } from '../ENTITY/productEntity';
import { CartEntity } from '../ENTITY/cartEntity';
import { DiscountDao } from '../DAO/discountDao';
import { SingleProductService } from '../SERVICE/single-product.service';
import { ProductDao } from '../DAO/productDao';
import { NewProductEntity } from '../ENTITY/newProductEntity';
import { OrderService } from '../SERVICE/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  userId:any = localStorage.getItem('userId');
  totalPrice:number = 0;
  finalPrice:number = 0;
  salesTax:number = this.totalPrice*0.06;
  reductionPrice:number = 0;             // = finalPrice * reductionPercentage

  constructor(private cartService:CartService, private router:Router, private singleProductService:SingleProductService, private orderService:OrderService){}
  
  ngOnInit(): void {

    this.getAllCarts(this.userId);
  }

    productId:number = 0;
    title:string = '';
    price:number = 0;
    description:string = '';
    category:string = '';
    image:string = '';

    product:ProductEntity = {
      productId:this.productId,
      title:this.title,
      price:this.price,
      description:this.description,
      category:this.category,
      image:this.image
    }

    discountName:string = '';
    discountCode:string = '';
    reductionPercent:number = 0;

    discountDao:DiscountDao = {
      discountName:this.discountName,
      discountCode:this.discountCode,
      reductionPercent:this.reductionPercent
    }

    // cartId:number=0;
    // userId:number=0;
    // // productId:number=0;

    // cartEntity:CartEntity = {
    //   cartId:this.cartId,
    //   userId:this.userId,
    //   productId:this.productId
    // }

    cartList: CartEntity[] = [];
    productList: NewProductEntity[] = [];

    getAllCarts(userId:any)
    {
      this.cartService.getCartList(this.userId).subscribe(
        (result: CartEntity[]) => {
          this.cartList = result;
          for(let p of this.cartList)
          {
            this.productId = p.productId;
          }
          for(let i of this.cartList)
          {
            this.loadSingleProduct(i.productId, i.cartId);
          }
          console.log(this.cartList);
          console.log(this.productList)
        },
        error => {
          console.log("Failed to get the cartList...")
        }
      )
    }

    loadSingleProduct(productId:number, cartId:number): void
    {
      this.singleProductService.getProductDetailsById(productId).subscribe(
        (result:ProductEntity) => {
          const newProductList = {
            cartId:cartId,
            productId:result.productId,
            title:result.title,
            price:result.price,
            image:result.image
          };

          this.productList.push(newProductList);
          this.totalPrice += result.price;
          this.salesTax = this.totalPrice*0.06;
          this.finalPrice = this.totalPrice + this.salesTax;
          // console.log(this.finalPrice)
          this.reductionPrice = this.finalPrice * this.reductionPercent;
          this.finalPrice = this.finalPrice - this.reductionPrice;
          console.log(this.reductionPercent)
          // console.log(this.finalPrice)
        }
      )
    }

    onApplyDiscount()
    {
      this.cartService.applyDiscount(this.discountCode).subscribe(
        (result) => {
          this.discountName = result.discountName
          this.reductionPercent = result.reductionPercent;
          this.reductionPrice = this.finalPrice * this.reductionPercent;
          this.finalPrice = this.finalPrice - this.reductionPrice;
          console.log('Discount applied!');
          alert('Discount applied!');
          console.log(this.totalPrice)
          console.log(this.salesTax)
          console.log(this.reductionPercent)
          console.log(this.finalPrice)
          // this.getAllCarts(this.userId);
        },
        (error) => {
          this.reductionPercent = 0;
          console.log(this.reductionPercent)
          console.log(error);
          alert('Failed to apply discount...');
        }
      )
    }

    onRemoveFromCart(cartId:number)
    {
      console.log(cartId)
      this.cartService.removeFromCart(cartId).subscribe(
        (result) => {
          console.log(result);
          console.log(this.productId);
          console.log(cartId);
          alert('Product has been removed from Cart!');
          // this.router.navigate(['/cart']);
          // window.location.reload();
          
          this.cartList.length = 0;
          this.productList.length = 0;
          // this.getAllCarts(this.userId);
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert('Failed to remove product from Cart...');
        })
    }

    // otherProductList:ProductEntity[] = [];

    onOrderNow()
    {
      // let productDaoList:ProductDao[] = [];
      // for(let p of this.productList) {
      //   let productDao:ProductDao = {
      //     title:p.title,
      //     price:p.price,
      //     image:p.image,
      //     description:this.description,
      //     category:this.category,

      //   }
      //   productDaoList.push(productDao);
      // }

      this.orderService.orderNow(this.userId).subscribe(
        (result) => {
          console.log(result);
          
          console.log('Your order has been placed!');
          alert('Your order has been placed!');
          this.router.navigate(['order']);
        },
        (error) => {
          console.log(error);
          console.log('Failed to place Order...');
          alert('Failed to place Order...');
        }
      )
    }

}
