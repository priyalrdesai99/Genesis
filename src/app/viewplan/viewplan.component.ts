import { Component, OnInit } from '@angular/core';
import { IFUser } from 'src/IFUser';
import { PlanService } from '../plan.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-viewplan',
  templateUrl: './viewplan.component.html',
  styleUrls: ['./viewplan.component.css']
})
export class ViewplanComponent implements OnInit {
  
	public plans:any;  
  
  public plan_id:number;
  public name:string;
  public email:string;
  public password: string;
  public contact_no: number;
  public userdata:IFUser;
  public repassword:string;
  public id:number;
  


  constructor(public plan:PlanService, public router: Router,public users:UserServiceService) { 
    this.email=localStorage.getItem('fullname');



       
    this.users.getUserWithId(this.email).subscribe(x => {
      this.userdata=x;
      console.log(this.userdata);
      if(this.userdata){
        this.name=this.userdata.name;
        this.password=this.userdata.password;
      this.contact_no=this.userdata.contact_no;
      console.log(this.userdata._id);
      this.id=this.userdata._id;
      this.plan_id=this.userdata.plan_id;
      }
   
      this.plan.getPlanWithId(this.plan_id).subscribe(x => { this.plans = x[0];
  
        console.log(this.plans.name);
      });
     
      
    });

    
  }

  ngOnInit() {
  }
}