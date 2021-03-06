import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Router } from '@angular/router';
import { IPlans } from 'src/IPlans';
import { IFUser } from 'src/IFUser';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-plan-settings',
  templateUrl: './plan-settings.component.html',
  styleUrls: ['./plan-settings.component.css']
})
export class PlanSettingsComponent implements OnInit {
  
	public plans:any;  
  
  
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
  
      if(this.userdata){
        this.name=this.userdata.name;
        this.password=this.userdata.password;
      this.contact_no=this.userdata.contact_no;
      console.log(this.userdata._id);
      this.id=this.userdata._id;
       
      
      console.log(this.userdata);

      this.plan.getPlans().subscribe(x => { this.plans = x;
        console.log(this.plans);
      });
      
    }
  
      
    });




  }

  ngOnInit() {

  }

  onformsubmit(plan_id:number){
    console.log("Hello");
    this.userdata = { 
      _id:this.id,
      name: this.name, 
      email : this.email,
      contact_no: this.contact_no,
      password:this.password,
      plan_id:plan_id
    }
    console.log(this.userdata);
    this.users.putUser(this.userdata).subscribe(x => { console.log( x)});
    this.router.navigate(['/viewplan']);

  
  }

}




