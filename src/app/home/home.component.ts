import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(users:UserServiceService) {
    
    users.getEmployees().subscribe(x => console.log( x)); 
   }

  ngOnInit() {
  }

}
