import { Component, OnInit } from '@angular/core';
import { IFUser } from 'src/IFUser';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public name:string;
  public email:string;
  public password: string;
  public contact_no: number;
  public userdata:IFUser;
  public repassword:string;
  public id:number;
  constructor(public users:UserServiceService,public router:Router) {

    this.email=localStorage.getItem('fullname')
        
   

    


   }

  

  ngOnInit() {
  
  
    this.users.getUserWithId(this.email).subscribe(x => {
      this.userdata=x;
  
      if(this.userdata){
        this.name=this.userdata.name;
        this.password=this.userdata.password;
      this.contact_no=this.userdata.contact_no;
      console.log(this.userdata._id);
      this.id=this.userdata._id;
      }

      
    });

  
  }

  onformsubmit(){
    this.userdata = { 
      _id:this.id,
      name: this.name, 
      email : this.email,
      contact_no: this.contact_no,
      password:this.password
    }
    console.log(this.userdata);
    this.users.putUser(this.userdata).subscribe(x => { console.log( x)});
    this.router.navigate(['/viewprofile']);

  
  }
  

}
