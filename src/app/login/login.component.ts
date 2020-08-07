import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {CovidserviceService}from '../covidservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  results:any;
  userlogin:boolean;
  email:String;
  password:String;

  constructor(private obj:CovidserviceService) { }

  ngOnInit(): void {
  }
  onsubmit(login:NgForm){
  
    console.log(login)
  
  let jsonObj={};
  jsonObj["email"]=login.value["email"];
  
  jsonObj["password"]=login.value["password"];
  
  
  console.log("----------output of login dashboard-",jsonObj);
    this.obj.loginUser(jsonObj).subscribe((result: any) => {
       this.results =result;
       console.log('result :--', this.results);
       if(result.length>0)
       {
         this.userlogin=true;
         console.log("login succesfull")
         
         console.log(this.results)
         
         
       }
       else{
      
         console.log("login failed")
       }
       
    
       
    });
    
  }

}
