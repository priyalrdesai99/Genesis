import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

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
  public headerList=[{"img":"./../../assets/images/back1.jpg"},{"img":"./assets/images/back2.jpg"},{"img":"assets/images/back3.jpg"},{"img":"assets/images/back4.jpg"},{"img":"assets/images/back5.jpg"}];
  public footerList=[{"img":"./../../assets/images/back1.jpg"},{"img":"./assets/images/back2.jpg"},{"img":"assets/images/back3.jpg"},{"img":"assets/images/back4.jpg"},{"img":"assets/images/back5.jpg"}];
  public contentList=[{"img":"./../../assets/images/back1.jpg"},{"img":"./assets/images/back2.jpg"},{"img":"assets/images/back3.jpg"},{"img":"assets/images/back4.jpg"},{"img":"assets/images/back5.jpg"}];
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

  headerSelected(i){
     console.log(i);

  }
  
  footerSelected(i){
   console.log(i);

}

contentSelected(i){
   console.log(i);

}
}
