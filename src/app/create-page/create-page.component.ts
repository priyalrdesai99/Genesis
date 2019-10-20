import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
declare var jquery: any;
declare var $: any;

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
  header_selected:any;
  content_selected:any;
  footer_selected:any;
  public headerList=[{'id':'b1','src':'assets/images/blockimages/C1.png','htmlsrc':'t1','template':'<div><h1>Hello</h1></div>'},
  {'id':'b2','src':'assets/images/blockimages/C1.png','htmlsrc':'t2','template':'<div><h1>Hello</h1></div>'},
  {'id':'b3','src':'assets/images/blockimages/C1.png','htmlsrc':'t3','template':'<div><h1>Hello</h1></div>'}];
  public footerList=[{'id':'f1','src':'assets/images/blockimages/C1.png','htmlsrc':'t4','template':'<div><h1>Hello</h1></div>'},
  {'id':'f2','src':'assets/images/blockimages/C1.png','htmlsrc':'t5','template':'<div><h1>Hello</h1></div>'},
  {'id':'f3','src':'assets/images/blockimages/C1.png','htmlsrc':'t6','template':'<div><h1>Hello</h1></div>'}];
  public contentList=[{'id':'c1','src':'assets/images/blockimages/C1.png','htmlsrc':'t7','template':'<div><h1>Hello</h1></div>'},
  {'id':'c2','src':'assets/images/blockimages/C1.png','htmlsrc':'t8','template':'<div><h1>Hello</h1></div>'},
  {'id':'c3','src':'assets/images/blockimages/C1.png','htmlsrc':'t9','template':'<div><h1>Hello</h1></div>'}];
  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
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
}
}
