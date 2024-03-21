import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProductService } from './SERVICE/product-service';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './SERVICE/category-service';
import { SingleProductService } from './SERVICE/single-product.service';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartService } from './SERVICE/cart-service';
import { WishlistService } from './SERVICE/wishlist.service';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { OrderService } from './SERVICE/order.service';
import { ProductDetailsService } from './SERVICE/product-details-service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardService } from './SERVICE/admin-dashboard-service';
import { RouterModule } from '@angular/router';
import { TokenService } from './SERVICE/token-service';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { RegisterService } from './SERVICE/register.service';
import { LoginService } from './SERVICE/login.service';
import { LogoutService } from './SERVICE/logout.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateDiscountComponent } from './update-discount/update-discount.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { OrderComponent } from './order/order.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarMenuComponent,
    WelcomeComponent,
    SingleProductComponent,
    CategoryComponent,
    CartComponent,
    WishlistComponent,
    ProductDetailsComponent,
    AdminDashboardComponent,
    CategoryDetailsComponent,
    RegisterComponent,
    LoginComponent,
    UpdateUserComponent,
    UpdateProductComponent,
    UpdateDiscountComponent,
    AddProductComponent,
    AddDiscountComponent,
    BottomFooterComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [RegisterService, LoginService, LogoutService, ProductService, ProductDetailsService, SingleProductService, CategoryService, CartService, WishlistService, OrderService, AdminDashboardService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
