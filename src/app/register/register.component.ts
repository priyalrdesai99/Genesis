import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../user-service.service';
import { IFUser } from 'src/IFUser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private name:string;
  private email:string;
  private password: string;
  private contact_no: number;
  private userdata:IFUser;
  public array:Array<IFUser>;
  public length:number;
  private repassword:string;
  constructor(public users:UserServiceService, public router: Router) { 
    
    
  }
  
  
  
  onformsubmit(){
    
    
    
    if(!this.isnotmatching()){
      this.users.getUsers().subscribe(x => { this.array = x;
      this.length=this.array.length+1;
      this.userdata = { 
        _id:this.array[this.length]._id+1,
        name: this.name, 
        email : this.email,
        password: this.password,
        contact_no: this.contact_no
        
      }
      console.log(this.userdata);
      this.users.postUser(this.userdata).subscribe(x => { console.log( x)});
      this.router.navigate(['/']);
  




    });
    
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


  ngOnInit() {
  
  


  }

}
