import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDashboardService } from '../SERVICE/admin-dashboard-service';
import { DiscountEntity } from '../ENTITY/discountEntity';

@Component({
  selector: 'app-update-discount',
  templateUrl: './update-discount.component.html',
  styleUrls: ['./update-discount.component.scss']
})
export class UpdateDiscountComponent {
  constructor(private activatedRoute: ActivatedRoute, private adminDashboardService: AdminDashboardService, private router: Router) {}

  private didUpdated: number = 0;

  percentChange(event:any)
  {
    let num = Number(event.target.value);
    this.discountEntity.reductionPercent = num;
  }

  ngOnInit(): void {
    this.didUpdated = this.activatedRoute.snapshot.params['discountId'];
    this.adminDashboardService.getOneDiscount(this.didUpdated).subscribe(
      (result: DiscountEntity) => {
        this.discountEntity = result;

        console.log(this.discountEntity);
      });
    this.discountEntity.discountId = this.didUpdated;
    console.log('HERE:'+this.didUpdated)
  }

  discountId: number = 0;
	discountName:string = '';
	discountCode:string = '';
	reductionPercent:number = 0;

  discountEntity: DiscountEntity = {
    discountId: this.discountId,
    discountName: this.discountName,
    discountCode: this.discountCode,
    reductionPercent: this.reductionPercent
  };

  onUpdateDiscount()
  {
    this.adminDashboardService.updateDiscount(this.didUpdated, this.discountEntity).subscribe( 
      (result:DiscountEntity)=> {
      this.discountEntity = result;
      alert('Discount has been Updated!');
      console.log('Discount has been Updated!');
      this.router.navigate(['admin']);
    },
      (error) => {
        alert("Failed to Update...");
        // this.router.navigate(['admin']);
    }
    );
  }

}
