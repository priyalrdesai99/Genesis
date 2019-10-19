import { Component, OnInit } from '@angular/core';
import { IFUser } from 'src/IFUser';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {
  pages=[{name:'page1',id:'p1'},{name:'page2',id:'p2'}]
  
  constructor() {
  
   }

  ngOnInit() {
  }

}
