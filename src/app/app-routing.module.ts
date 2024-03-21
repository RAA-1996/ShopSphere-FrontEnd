import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderComponent } from './order/order.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateDiscountComponent } from './update-discount/update-discount.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/:productId',
    component: SingleProductComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      // {
      //   path: 'update/:userId',
      //   component: UpdateUserComponent,
      // },
      // {
      //   path: '/addproduct',
      //   component: AddProductComponent,
      // },
      // {
      //   path: 'addDiscount',
      //   component: AddDiscountComponent,
      // },
    ],
  },
  {
    path: 'admin/addProduct',
    component: AddProductComponent,
  },
  {
    path: 'admin/addDiscount',
    component: AddDiscountComponent,
  },
  {
    path: 'admin/updateUser/:userId',
    component: UpdateUserComponent,
  },
  {
    path: 'admin/updateProduct/:productId',
    component: UpdateProductComponent,
  },
  {
    path: 'admin/updateDiscount/:discountId',
    component: UpdateDiscountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
