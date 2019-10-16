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
  
  // navbar:any;
  // sticky;
  formdata:FormGroup;
  

  
  
  
  constructor(users:UserServiceService,authenticate: LoginService, private router: Router) {
  
    users.getUsers().subscribe(x => x); 
    this.authenticate = authenticate;
   }

  ngOnInit() {
  
    this.loggedin = false;
    console.log(localStorage.getItem('fullname'))
    if (localStorage.getItem('fullname')) {
      this.fullname = localStorage.getItem('fullname');
      this.loggedin = true;
      this.router.navigate(['loggedin']);
    
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


  

  onClickSubmit(value: any) {
    // alert( 'hii' );
    this.username = value.username;
    this.password = value.password;
    this.authenticate.validate(this.username, this.password).subscribe(r => {
    this.user = r;
    
    if (this.user) {
      localStorage.setItem('fullname', this.user[0].email);
      this.error = false;
      this.router.navigate(['/loggedin']);
     } else {
      this.error = true;
      this.errormsg = 'Invalid Username/Password';
      }
    });
  }
}
