import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { IFeedback } from 'src/IFeedback';
import { UserServiceService } from '../user-service.service';
import { IFUser } from 'src/IFUser';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {
  public feeds:Array<IFeedback>;
  public user_data:IFUser;
  public user_id:number;
  public feedid:number;
  public newfeed:any;
  public newFeedback:IFeedback;
  public lastId:number;
  constructor(public feed:FeedbackService,public user:UserServiceService) {
    user.getUserWithId(localStorage.getItem('fullname')).subscribe(x => {this.user_data=x;
    this.user_id=this.user_data._id;
    console.log(this.user_id);
    feed.getFeedWithUser(this.user_id).subscribe( x => { this.feeds=x;
      this.lastId=this.feeds[this.feeds.length-1]._id+1;

    });
    });
  }

  ngOnInit() {
  }

  delete(event:any)
  {
    
    this.feedid=event.target.value;
    this.feed.deleteFeed(this.feedid).subscribe(x => x);
    window.location.href='/feedback';
  }

  give()
  {
    this.newFeedback =
   {
      _id:this.lastId,
      user_id:this.user_id,
      feed:this.newfeed

   }
   
   this.feed.postFeed(this.newFeedback).subscribe(x => {console.log(x);
   });
   window.location.href='/feedback';
  }
}
