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
  private repassword:string;
  constructor(public users:UserServiceService) { }
  
  
  onformsubmit(){
    
    
    
    if(!this.isnotmatching()){
    console.log("Is");
    this.userdata = { 
    name: this.name, 
      email : this.email,
      password: this.password,
      contact_no: this.contact_no
      
    }
    console.log(this.userdata);
    this.users.postUser(this.userdata).subscribe(x => { console.log( x)});
  }
  else{
    alert("enter proper repassword");
  }
  }
  isnotmatching(){
    if(this.password != this.repassword )
    {
      return true;
    }
    else{
      return false;
    }

  }
//   checkPasswords(group: FormGroup) { // here we have the 'passwords' group
//   let pass = group.get('password').value;
//   let confirmPass = group.get('confirmPass').value;

//   return pass === confirmPass ? null : { notSame: true }     
// }

  ngOnInit() {
  
  


  }

}
