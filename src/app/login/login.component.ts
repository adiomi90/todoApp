import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username:string="max";
password:string="";
errorMessage:string="invalid credentials";
invalidLogin = false;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin():void{
  if(this.username =="max" && this.password=="dummy"){
    this.router.navigate(['welcome',this.username]);
    this.invalidLogin = false;
    
  }else{
    this.invalidLogin = true;
  }
console.log(this.username,this.password);
}

}
