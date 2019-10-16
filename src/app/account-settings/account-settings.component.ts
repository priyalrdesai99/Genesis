import { Component, OnInit } from '@angular/core';
import { IFUser } from 'src/IFUser';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  private name:string;
  private email:string;
  private password: string;
  private contact_no: Number;
  private userdata:IFUser;
  private repassword:string;
  constructor(public users:UserServiceService) {
    users.getUserWithId(1).subscribe(x => {this.userdata= x;});
   }

  

  ngOnInit() {
  }

}
