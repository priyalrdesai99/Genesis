import { Component, OnInit } from '@angular/core';
import { IFUser } from 'src/IFUser';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-nav',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="width:100%; border-radius:0px; margin-bottom:0px; height:10%;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <img src="assets/images/img1.png" class="float-left mt-sm-2 mb-sm-2" style="width:11em;  border:2px solid #17cad4; border-radius:7px; position: relative;">
        
        <ul class="navbar-nav justify-content-end"  style="position: fixed;margin-left: 75%; margin-top:0%; padding-top: 0%;">
        <li class="nav-item dropdown">
                <a class="nav-link btn btn-outline-info dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Welcome {{username}}!
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" routerLink="../viewprofile" href="#">My profile</a>
                    <a class="dropdown-item" routerLink="/plansettings" href="#">Change Plan</a>
 

                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="../logout" tabindex="-1" aria-disabled="true">Logout</a>
            </li>
        </ul>
    

    </div>
</nav>

  
  
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userdata:IFUser;
  username:string;
  constructor(user:UserServiceService) {
   user.getUserWithId(localStorage.getItem('fullname')).subscribe(x => {this.userdata=x;
    this.username=this.userdata.name;
    
    });

   }

  ngOnInit() {
  }

}
