import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $:any;
declare var blocks:any;
var currid:number;
var targ:any;




@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
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
        
    });
  }
  function1(id){
    // ele=document.getElementById(id);
    console.log(id.target);
    // curtext=document.getElementById('curtext');
    // curtext.value=ele.innerHTML;
    // curid=id;
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
          alert(this);
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
        this.giveID(div);
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
  
  
}
