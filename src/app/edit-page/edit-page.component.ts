import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { IComponent } from '../IComponent';
import { ComponentService } from '../component.service';

import { PageService } from '../page.service';
import { IPage } from 'src/IPage';
import { UserServiceService } from '../user-service.service';
import { IFUser } from 'src/IFUser';
declare var jquery: any;
declare var $: any;
declare var blocks: any;
var currid: number;
var targ: any;


@Component({ 
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})

export class EditPageComponent implements OnInit {
  private clicked: string;
  private comptext: string;
  private mc: EditPageComponent;
private pageid:any;
public headers:Array<IComponent>;
public contents:Array<IComponent>;
public footers:Array<IComponent>;
public page:IPage;
public user_id:number;
public user_data:IFUser;
//private route:ActivatedRoute;
public usereditpage:string;
public pname:string;  
  
 
constructor(private route: ActivatedRoute,public components:ComponentService,public pages:PageService,public user:UserServiceService,public router:Router) {

  this.pageid=this.route.snapshot.paramMap.get('id');
    
    
  user.getUserWithId(localStorage.getItem('fullname')).subscribe(x => {this.user_data=x;
    this.user_id=this.user_data._id;
  pages.getPageWithId(this.user_id,this.pageid).subscribe(x => { this.page=x;
      this.pname=this.page.name;
      console.log(this.page.content);
      this.usereditpage=this.page.content;

      document.getElementById('editpage').insertAdjacentHTML('beforeend', this.usereditpage);  
      $(document).ready(function () {
        $('#editpage *').css("position", "relative");
        $('#editpage div p,#editpage div :header').on('click', function () {
          console.log('hey there');
          console.log(this);
  
          document.getElementById("clickedele").setAttribute("value", this.id);
  
          var ele = document.getElementById(this.id);
          console.log(ele);
          if (typeof ele != null || typeof ele != undefined) {
  
            if (ele.nodeType != 1) {
              ele.childNodes.forEach(c => {
                console.log(c);
              });
              alert("Cannot modify div and parent elements at the moment");
            }
            else {
              var textele = document.getElementById("comptextele")
              console.log(textele);
              textele.setAttribute("value", ele.textContent);
              textele.textContent=ele.textContent;
              
            }
  
          }
  
        });
        
      });
    });
    });



  components.getComponentWithType("headers").subscribe(x => {this.headers = x;
    console.log(this.headers);
  });
  components.getComponentWithType("contents").subscribe(x => {this.contents = x;
    console.log(this.contents);
  });
  components.getComponentWithType("footers").subscribe(x => {this.footers = x;
    console.log(this.footers);
  });

 }
  ngOnInit() {
    console.log(this.pageid);  
    currid = 1;
    this.comptext = "";
    this.mc = this;
    this.clicked = '0';
    
    $(document).ready(function () {
      console.log("hello");

   });
  }
  save() {
    console.log(document.getElementById("editpage").innerHTML);
    this.page = { 
        _id:this.pageid,
        name: this.pname, 
        content:document.getElementById("editpage").innerHTML,
        user_id:this.user_id
      }
      
      this.pages.putPage(this.page).subscribe(x => { console.log( x)});
      this.router.navigate(['/loggedin']);
    
}
delete()
{
  this.pages.deletePage(this.pageid).subscribe(x => x);
}


  textchanged(event: any) {
    console.log('textchanged');
    console.log(this.clicked);
    this.clicked = document.getElementById("clickedele").getAttribute("value");
    
    var ele = document.getElementById(this.clicked);

    ele.textContent = event.target.value;
  }

  boldclicked() {
    console.log('boldclicked');
    this.clicked = document.getElementById("clickedele").getAttribute("value");
    var ele = document.getElementById(this.clicked);

    if (ele.style.fontWeight == "") {
      ele.style.fontWeight = "bold";
    }
    else {
      ele.style.fontWeight = "";
    }
  }

  underlineclicked() {
    console.log('underlineclicked');
    this.clicked = document.getElementById("clickedele").getAttribute("value");
    var ele = document.getElementById(this.clicked);

    if (ele.style.textDecoration == "") {
      ele.style.textDecoration = "underline";
    }
    else {
      ele.style.textDecoration = "";
    }
  }

  alignclicked(align: string) {
    console.log('alignclicked' + align);
    this.clicked = document.getElementById("clickedele").getAttribute("value");
    var ele = document.getElementById(this.clicked);

    ele.style.textAlign = align;

  }

  italicclicked() {
    console.log('italicclicked');
    this.clicked = document.getElementById("clickedele").getAttribute("value");
    var ele = document.getElementById(this.clicked);

    if (ele.style.fontStyle == "normal" || ele.style.fontStyle == "") {
      ele.style.fontStyle = "italic";
    }
    else {
      ele.style.fontStyle = "normal";
    }

  }
  allowDrop(ev) {
    ev.preventDefault();

    targ = document.getElementById(ev.target.id);

    if (targ != null && targ.tagName == "DIV" && targ != document.getElementById("editpage")) {
      targ.style.border = "1px solid blue";
      console.log(targ.tagName);
    }

  }

  allowDropOver(ev) {
    ev.preventDefault();
    targ = document.getElementById(ev.target.id);
    if (targ != null && targ != document.getElementById("editpage")) {
      targ.style.border = "0px solid blue";
      console.log("here" + targ.id);
    }

  }

  drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
  }


  drop(ev) {
    currid++
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
console.log(data);
    var img1 = document.getElementById(data);

    var temp = document.getElementById(img1.getAttribute("alt"));
    console.log("temp");
    console.log(temp.firstChild);
    var str = temp.firstChild.textContent;
    //var div = document.createElement('div');
    var div = '<div id="' + currid + '">' + str + '</div>';
    //alert(this);

    parent = ev.target.parentElement;

    // if (ev.target != document.getElementById("editpage")) {
    //   alert("Sorry but you can only insert blocks at end of page")
    // }
    // else {

      document.getElementById("editpage").insertAdjacentHTML('beforeend', div);
      //       document.getElementById("editpage").style("height","auto");
      console.log("this");
      console.log(document.getElementById(<string><any>currid));
    // }

    var div1 = document.getElementById(<string><any>currid);
    //this.giveID(div);
    //alert(div);


    this.giveID(div1);
    // div.innerHTML = temp.innerHTML.trim();
    console.log(div1.id);

    //div=div.firstChild;
    //div.id=currid;
    //currid++;



    // $('#editpage div').hover(function(event){
    //     $(this).css("border","1px solid blue");
    // },function(event){
    //     $(this).css("border","0px solid blue");
    // });
    console.log('currid');
    currid -= 1
    $('#editpage div div p, #editpage div div :header').on('click', function () {
      console.log('hey there' + currid);
      console.log(this);

      document.getElementById("clickedele").setAttribute("value", this.id);

      var ele = document.getElementById(this.id);
      console.log(ele);
      if (typeof ele != null || typeof ele != undefined) {

        if (ele.nodeType != 1) {
          ele.childNodes.forEach(c => {
            console.log(c);
          });
          alert("Cannot modify div and parent elements at the moment");
        }
        else {
          var textele = document.getElementById("comptextele")
          textele.textContent=ele.textContent;
          textele.setAttribute("value", ele.textContent);
          console.log(textele);

        }

      }

    });

  }
 
  

  giveID(ele) {
    var len = ele.childNodes.length;
    if (ele.hasChildNodes) {
      var children = ele.childNodes;
      for (var i = 0; i < len; i++) {
        this.giveID(children[i]);
        console.log(i);
      }
    }

    ele.id = currid;

    console.log(ele.id);
    currid++;
  }
  

  textColor(rgb:any){
    console.log('textcolorclicked' + rgb);
    this.clicked = document.getElementById("clickedele").getAttribute("value");
    var ele = document.getElementById(this.clicked);

    ele.style.color = rgb;
  }

  backgroundColor(rgb:any){
    console.log('backgroundcolorclicked' + rgb);
    this.clicked = document.getElementById("clickedele").getAttribute("value");
    var ele = document.getElementById(this.clicked);

    ele.style.backgroundColor = rgb;
  }

  downloadclicked(){
    alert("The code for your page is displayed in a new tab. Please copy it into a .html file to make it your own.")
  }
}
