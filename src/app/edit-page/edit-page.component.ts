import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $:any;
declare var blocks:any;
var currid:number;
var targ:any;
// var clicked:string;
// var comptext:string;



@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  private clicked:string;
  private comptext:string;
  private mc:EditPageComponent;
  blocks=[
    {'id':'b1',
    'src':'assets/images/blockimages/C1.PNG',
    'htmlsrc':'t1',
    'template':'<div style="max-width:100%; border:1px solid black;margin:0.5em;"><h1 id="h12">Head1</h1><p id="h13">Welcome to sample site</p></div>'
  },
  {'id':'b2',
    'src':'assets/images/blockimages/Capture.PNG',
    'htmlsrc':'t2',
    'template':'123'
  }
]
  ngOnInit() {
    currid=0;
    this.comptext="";  
    this.mc=this;
    $(document).ready(function () {
        console.log("hello");
        
        // $('#blocks img').attr("draggable", "true");
        // $('#blocks img').attr("(ondragstart)", "drag(event)");
        $('#editpage *').css("position", "relative");
    //     $('#editpage').attr("ondrop", "drop(event)");
    //     $('#editpage').attr("ondragover", "allowDrop(event)");
    //     $('#editpage').attr("ondragleave", "allowDropOver(event)");
    //     $('#editpage div').attr("ondragleave", "allowDropOver(event)");
    //     // $('#editpage div').attr("onhover", "hover(event)");
    //  $('#editpage div').attr("ondragover", "allowDrop(event)");
        $('#editpage div p').on('click',function(){
          console.log();
          this.component.clicked=this.id;
    var ele=document.getElementById(this.component.clicked);
    if(typeof ele != null || typeof ele != undefined){
      
      if(ele.nodeType!=1){
          ele.childNodes.forEach(c => {
            console.log(c);
          });
          alert("Cannot modify div and parent elements at the moment");
        }
        else{
          this.component.comptext=ele.textContent;
        }
  
    }
         //function1(this.id);
        });
    });
  }
  

    textchanged(){
      console.log('textchanged');
      var ele=document.getElementById(this.clicked);
    
          ele.textContent=this.comptext;
    }

    boldclicked(){
      console.log('boldclicked');
      var ele=document.getElementById(this.clicked);
    
          if(ele.style.fontWeight ==""){
            ele.style.fontWeight="bold";
          }
          else{
            ele.style.fontWeight="";
          }
    }

    underlineclicked(){
      console.log('underlineclicked');
      var ele=document.getElementById(this.clicked);
    
          if(ele.style.textDecoration ==""){
            ele.style.textDecoration="underline";
          }
          else{
            ele.style.textDecoration="";
          }
    }

    alignclicked(align:string){
      console.log('alignclicked'+align);
      var ele=document.getElementById(this.clicked);
    
      ele.style.textAlign = align;
    
    }

    italicclicked(){
      console.log('italicclicked');
      var ele=document.getElementById(this.clicked);
    
          if(ele.style.fontStyle =="normal" || ele.style.fontStyle ==""){
            ele.style.fontStyle="italic";
          }
          else{
            ele.style.fontStyle="normal";
          }

    }
    allowDrop(ev) {
        ev.preventDefault();
        
        targ=document.getElementById(ev.target.id);
        
        if(targ!=null && targ.tagName=="DIV" && targ!=document.getElementById("editpage"))
        {
            targ.style.border="1px solid blue";
            console.log(targ.tagName);
        }
       
    }
  
    allowDropOver(ev) {
        ev.preventDefault();
        targ=document.getElementById(ev.target.id);
        if(targ!=null && targ!=document.getElementById("editpage")){
            targ.style.border="0px solid blue";
            console.log("here"+targ.id);
        }
        
    }
  
    drag(ev) {
      
        ev.dataTransfer.setData("text", ev.target.id);
    }
  
    
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        
        var img1=document.getElementById(data);
        
        var temp=document.getElementById(img1.getAttribute("alt"));
        console.log(temp);
        //var div = document.createElement('div');
        var div=$('<div id="'+currid+'"></div>').text(temp.innerHTML.trim()).ready(function(){
          //alert(this);
          parent = ev.target.parentElement;
        
        if (ev.target != document.getElementById("editpage")) {
            document.getElementById("editpage").insertBefore($('this'), ev.target);
            console.log("other");
            ev.target.style.border="0px solid blue";
        }
        else {
          //  document.getElementById("editpage").appendChild(this);
            //        document.getElementById("editpage").style("height","auto");
            console.log("this");
        }

        div=document.getElementById(<string><any>currid);
        //this.giveID(div);
        alert(div);
        $('#editpage *').click(function(){
          console.log($(this).attr('id'));
          this.function1($(this).attr('id'));
          });  
      
      });
        // div.innerHTML = temp.innerHTML.trim();
  console.log(div.id);
  
        //div=div.firstChild;
        //div.id=currid;
        //currid++;
        
        
        
        // $('#editpage div').hover(function(event){
        //     $(this).css("border","1px solid blue");
        // },function(event){
        //     $(this).css("border","0px solid blue");
        // });
        
        
    }
    drope(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        
        parent = ev.target.parentElement;
        console.log("target");
        console.log(ev.target.id);
        
        if(event.target!=document.getElementById("editpage")){
            document.getElementById("editpage").insertBefore(document.getElementById(data),ev.target);
            console.log("other");
        }
        else{
            document.getElementById("editpage").appendChild(document.getElementById(data));
    //        document.getElementById("editpage").style("height","auto");
    console.log("this");
        }
        // $('#editpage div').hover(function(event){
        //     $(this).css("border","1px solid blue");
        // },function(event){
        //     $(this).css("border","0px solid blue");
        // });
        $('#editpage *').click(function(){
            console.log($(this).attr('id'));
            this.function1($(this).attr('id'));
            });
    }
  
    save() {
        alert(document.getElementById("editpage").innerHTML);
    }
  
  giveID(ele){
    if(ele.hasChildNodes()){
      ele.childNodes.forEach(this.giveID);
    }
    ele.id=currid;
    currid++;
  }  
  function1(id){
    
    console.log(id);
    this.clicked=id;
    var ele=document.getElementById(this.clicked);
    if(typeof ele != null || typeof ele != undefined){
      
      if(ele.nodeType!=1){
          ele.childNodes.forEach(c => {
            console.log(c);
          });
          alert("Cannot modify div and parent elements at the moment");
        }
        else{
          this.comptext=ele.textContent;
        }
  
    }
    // curtext=document.getElementById('curtext');
    // curtext.value=ele.innerHTML;
    // curid=id;
    }  
   
}
