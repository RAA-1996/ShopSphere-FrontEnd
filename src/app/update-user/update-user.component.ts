import { Component, OnInit } from '@angular/core';
// import { RegisterDao } from '../DAO/registerDao';
import { AddressDao } from '../DAO/addressDao';
import { NameDao } from '../DAO/nameDao';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDashboardService } from '../SERVICE/admin-dashboard-service';
import { UserEntity } from '../ENTITY/userEntity';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private adminDashboardService:AdminDashboardService, private router:Router){}

  private uidUpdated:number = 0;
  // userData:undefined|UserEntity;

  ngOnInit(): void {
    
    this.uidUpdated = this.activatedRoute.snapshot.params['userId'];
    this.adminDashboardService.getOneUser(this.uidUpdated).subscribe( (result:UserEntity)=> {
      this.userEntity = result;
      this.userEntity.password='';

      console.log(this.userEntity)
    })
    this.userEntity.userId = this.uidUpdated;

    // let userId = this.activatedRoute.snapshot.paramMap.get('userId');
    // console.warn(userId);
    // userId && this.adminDashboardService.getUserById(userId).subscribe( 
    //   (data)=>{
    //     console.warn(data)
    //     this.userData=data;
    // })
  }

  userId: number = 0;
  username: string = '';
  email: string = '';
  password: string = '';
  fname: string = '';
  lname: string = '';
  city: string = '';
  street: string = '';
  houseNumber: string = '';
  zipcode: string = '';
  mobile: string = '';
  role: string = '';
  
  name: NameDao = {
    fname: this.fname,
    lname: this.lname,
  };
  address: AddressDao = {
    city: this.city,
    street: this.street,
    houseNumber: this.houseNumber,
    zipcode: this.zipcode,
  };

  // registerDao: RegisterDao = {
  //   username: this.username,
  //   email: this.email,
  //   password: this.password,
  //   name: this.name,
  //   address: this.address,
  //   mobile: this.mobile,
  //   role: this.role,
  // };

  userEntity: UserEntity = {
      userId:this.userId,
      username: this.username,
      email: this.email,
      password: this.password,
      name: this.name,
      address: this.address,
      mobile: this.mobile,
      role: this.role
  }


  onUpdateUser() 
  {
    this.adminDashboardService.updateUser(this.uidUpdated, this.userEntity).subscribe( 
      (result:UserEntity)=> {
      this.userEntity = result;
      alert('User has been Updated!');
      console.log('User has been Updated!');
      this.router.navigate(['admin']);
    },
      (error) => {
        alert("Failed to Update...");
        // this.router.navigate(['admin']);
    }
    );

  }

}
