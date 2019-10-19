// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'sidenav',
//   template: `
//     <div id="content">
//       <div id="contentInside" *ngFor="let container of containers"></div>
//       <button (click)="add()">Add</button>
//     </div>




    
//   `,
//   styles: [`
//     #content{
//       width:100%;
//       height:90px;
//       border:1px solid black;
//     }
//     #contentInside{
//       width:100px;
//       height:70px;
//       margin:7px;
//       border:1px solid black;
//       display:inline-flex;
//     }
//   `]
// })

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
