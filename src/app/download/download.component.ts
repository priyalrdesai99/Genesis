import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComponent } from '../IComponent';
import { ComponentService } from '../component.service';

import { PageService } from '../page.service';
import { IPage } from 'src/IPage';
import { UserServiceService } from '../user-service.service';
import { IFUser } from 'src/IFUser';
declare var jquery: any;
declare var $: any;
declare var blocks: any;



@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  public page:IPage;
public user_id:number;
public user_data:IFUser;
//private route:ActivatedRoute;
public usereditpage:string;
public pname:string;  
private pageid:any;
  constructor(private route: ActivatedRoute,public components:ComponentService,
    public pages:PageService,public user:UserServiceService,public router:Router) { 
    this.pageid=this.route.snapshot.paramMap.get('id');
    
    
    user.getUserWithId(localStorage.getItem('fullname')).subscribe(x => {this.user_data=x;
      this.user_id=this.user_data._id;
    pages.getPageWithId(this.user_id,this.pageid).subscribe(x => { this.page=x;
        this.pname=this.page.name;
        console.log(this.page.content);
        this.usereditpage=this.page.content;
    });
  });
  }

  ngOnInit() {

    

  }
}
