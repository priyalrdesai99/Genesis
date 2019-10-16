import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { IFUser } from 'src/IFUser';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: IFUser;
  public username;
  public fullname;
  public error;
  public errormsg;
  public password;
  public loggedin;
  authenticate: LoginService;
  formdata;
  // navbar:any;
  // sticky;

  
  
  
  constructor(users:UserServiceService,authenticate: LoginService, private router: Router) {
  
    users.getUsers().subscribe(x => { console.log( x)}); 
    this.authenticate = authenticate;
   }

  ngOnInit() {
  //   window.onscroll = function() {this.myFunction()};  
  //   // Get the navbar
  // this.navbar = document.getElementById("nav");
  
  // // Get the offset position of the navbar
  // this.sticky = this.navbar.offsetTop;
    
    this.loggedin = false;
    if (localStorage.getItem('fullname')) {
      this.fullname = localStorage.getItem('fullname');
      this.loggedin = true;
      this.router.navigate(['Movie']);
    }
    this.errormsg = '';
    this.formdata = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('')
      ])),
      password: new FormControl('')
    });

    
  }


  signout() {
    // const auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(() => {
    // });
    localStorage.removeItem('fullname');
    this.router.navigate(['Movie']);
  }

  onClickSubmit(value: any) {
    // alert( 'hii' );
    this.username = value.username;
    this.password = value.password;
    this.authenticate.validate(this.username, this.password).subscribe(r => {
    this.user = r;
    console.log(this.user);
    if (this.user) {
      localStorage.setItem('fullname', this.user.name.toString());
      this.error = false;
      this.router.navigate(['/Movie']);
     } else {
      this.error = true;
      this.errormsg = 'Invalid Username/Password';
      }
    });
  }
  

  
  // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // myFunction() {
  //   if (window.pageYOffset >= this.sticky) {
  //     this.navbar.classList.add("sticky");
  //   } else {
  //     this.navbar.classList.remove("sticky");
  //   }
  // }
}
