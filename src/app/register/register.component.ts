import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { IFUser } from 'src/IFUser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private name:string;
  private email:string;
  private password: string;
  private contact_no: Number;
  private userdata:IFUser;

  constructor(public users:UserServiceService) { }
  
  
  onformsubmit($event){
    this.userdata = { 
      _id: 1,
      name: this.name, 
      email : this.email,
      password: this.password,
      contact_no: this.contact_no
    }
    this.users.postUser(this.userdata).subscribe(x => { console.log( x)})
  }
  ngOnInit() {
  
  


  }

}
