import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
declare var jquery: any;
declare var $: any;
import { ComponentService } from '../component.service';
import { PageService } from '../page.service';
import { IPage } from 'src/IPage';
import { UserServiceService } from '../user-service.service';
import { IFUser } from 'src/IFUser';

export interface Food {
   value: string;
   display: string;
}
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  title = 'materialApp';   
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  public headerList:any;
  public footerList:any;
  public contentList:any;
  public length:number;
  public id:any;
  public pages:Array<IPage>;
  public user_id:number;
  public user_data:IFUser;
  public p:IPage;
  public h:string;
  public header_selected:any;
  public content_selected:any;
  public footer_selected:any;
  constructor(private _formBuilder: FormBuilder,public components:ComponentService,public page:PageService,public user:UserServiceService) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
      
   });
   this.h="hello";
   components.getComponentWithType("headers").subscribe(x => {this.headerList = x;
      console.log(this.headerList);
    });
    components.getComponentWithType("contents").subscribe(x => {this.contentList = x;
      console.log(this.contentList);
    });
    components.getComponentWithType("footers").subscribe(x => {this.footerList = x;
      console.log(this.footerList);
    });

    page.getPages().subscribe(x => {this.pages=x ;
      this.length=this.pages.length-1;
      this.id=this.pages[this.length]._id+1;
      user.getUserWithId(localStorage.getItem('fullname')).subscribe(x => {this.user_data=x;
         
         this.user_id=this.user_data._id;
         console.log("User_id:"+this.user_id);
         
   });

  });
}
  ngOnInit() {
     this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
     });
     this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
     });
     this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
   });
   
   this.fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required]
 });
  }

  headerSelected(i,event){
     console.log(i);
this.header_selected=i;
$("#headers *").css('opacity','1.0');
 
 event.target.style.opacity=0.5;
  }
  
  footerSelected(i,event){
   console.log(i);
this.footer_selected=i;
$("#footers *").css('opacity','1.0');
 
 event.target.style.opacity=0.5;

}

contentSelected(i,event){
   console.log(i);
this.content_selected=i;
var contents=document.getElementById("contents");

 $("#contents *").css('opacity','1.0');
 
 event.target.style.opacity=0.5;
}

createpage(){
  console.log(this.firstFormGroup.get("firstCtrl").value);
  
  console.log("header"+this.header_selected);
  console.log("footer"+this.footer_selected);
  console.log("content"+this.content_selected);

  var pagehtml=this.header_selected.template+this.content_selected.template+this.footer_selected.template;
  console.log(pagehtml);
  this.p =
   {
      _id:this.id,
      name:this.firstFormGroup.get("firstCtrl").value,
      user_id:this.user_id,
      content:pagehtml 

   }
   
   this.page.postPage(this.p).subscribe(x => {console.log(x);
   });
}
}
