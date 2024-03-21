import { Component } from '@angular/core';
import { AdminDashboardService } from '../SERVICE/admin-dashboard-service';
import { Router } from '@angular/router';
import { DiscountDao } from '../DAO/discountDao';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.scss']
})
export class AddDiscountComponent {

  constructor(private adminDashboardService:AdminDashboardService, private router:Router){};

  discountName:string = '';
	discountCode:string = '';
	reductionPercent:number = 0;

  percentChange(event:any)
  {
    let num = Number(event.target.value);
    this.reductionPercent = num;
  }

  onAddDiscount()
  {
    const discountDao:DiscountDao = {
      discountName: this.discountName,
      discountCode: this.discountCode,
      reductionPercent: this.reductionPercent
    };

    console.log(discountDao);
    this.adminDashboardService.addDiscount(discountDao).subscribe(
      (data) => {
        console.log(data);
        alert("Discount has been added!");
        this.router.navigate(['admin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
