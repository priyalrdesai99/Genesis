import { Component, OnInit } from '@angular/core';
import { IFUser } from 'src/IFUser';
import { UserServiceService } from '../user-service.service';
import { PageService } from '../page.service';
import { IPage } from 'src/IPage';

@Component({
  selector: 'app-nav',
  templateUrl:'nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userdata:IFUser;
  username:string;
  user_id:number;
  pages:Array<IPage>;
  constructor(user:UserServiceService,public page:PageService) {
   
    user.getUserWithId(localStorage.getItem('fullname')).subscribe(x => {this.userdata=x;
    this.username=this.userdata.name;
    this.user_id=this.userdata._id;
    page.getPageUserId(this.user_id).subscribe(x => { this.pages=x;
    console.log(this.pages);
    });
    });


   }

  ngOnInit() {
  }

}
