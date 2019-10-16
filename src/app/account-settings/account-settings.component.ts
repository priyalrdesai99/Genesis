import { Component, OnInit } from '@angular/core';
import { IFUser } from 'src/IFUser';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  private name:String;
  private email:String;
  private password: String;
  private contact_no: Number;
  private userdata:IFUser;
  private repassword:String;
  constructor(public users:UserServiceService) {
    users.getUserWithId("priyal").subscribe(x => {this.userdata= x;this.name=this.userdata.name;
      this.email=this.userdata.email;
      this.contact_no=this.userdata.contact_no;console.log(this.userdata.name);
  });
    
   

    


   }

  

  ngOnInit() {
  }

}
