import { Component, OnInit } from '@angular/core';
import { IFUser } from 'src/IFUser';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  userdata:IFUser;
  email:string;
  username:string;
  contact_no:number;
  constructor(users:UserServiceService) {
    this.email=localStorage.getItem('fullname')
    users.getUserWithId(this.email).subscribe(x => {this.userdata=x;
    this.username=this.userdata.name;
    this.contact_no=this.userdata.contact_no;
    });
   }

  ngOnInit() {
  }

}
