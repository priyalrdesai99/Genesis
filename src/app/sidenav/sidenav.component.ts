import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sidenav',
  template: `
    <div id="content">
      <div id="contentInside" *ngFor="let container of containers"></div>
      <button (click)="add()">Add</button>
    </div>




    
  `,
  styles: [`
    #content{
      width:100%;
      height:90px;
      border:1px solid black;
    }
    #contentInside{
      width:100px;
      height:70px;
      margin:7px;
      border:1px solid black;
      display:inline-flex;
    }
  `]
})

export class SidenavComponent implements OnInit {

    containers = [];

  constructor() { }

  ngOnInit() { }

  add() {
    this.containers.push(this.containers.length);
  }
}
