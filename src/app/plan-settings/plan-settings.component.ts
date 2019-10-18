import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Router } from '@angular/router';
import { IPlans } from 'src/IPlans';

@Component({
  selector: 'app-plan-settings',
  templateUrl: './plan-settings.component.html',
  styleUrls: ['./plan-settings.component.css']
})
export class PlanSettingsComponent implements OnInit {
  public _id:number;
	public name: string;
	public storage: string;
	public time_duration:string;
  public price:string;
  public plans:any;  
  public temp:boolean;
  constructor(public plan:PlanService, public router: Router) { 
    this.temp=false;
    this.plan.getPlans().subscribe(x => { this.plans = x;
    this.temp=true;

    });
    console.log(this.plans);



  }

  ngOnInit() {
  }

}
