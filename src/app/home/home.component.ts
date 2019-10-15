import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(users:UserServiceService) {
  
    users.getUsers().subscribe(x => { console.log( x)}); 
    console.log("hello");
   }

  ngOnInit() {
    
  }

}
