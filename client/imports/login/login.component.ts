import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {NgForm} from '@angular/forms';
import {Meteor} from 'meteor/meteor';
import {Router} from '@angular/router';
import {Accounts} from 'meteor/accounts-base';
import {Session} from 'meteor/session';

import template from './login.html';
@Component({
  selector:'login',
  template,
  styleUrls:['styles/login.css'],
  directives:[NgClass, NgForm]
})

export class LoginComponent{
  // REGISTRATION
  // firstname:string;
  // lastname:string;
  username:string;
  password:string;
  // FORM ATTRIBUTES
  category:string;
  member:boolean; memberbounce:boolean;
  executive:boolean; executivebounce:boolean;

  constructor(public router:Router){}

  animate(category){
    this.category = category;
    if(category == 'member'){
      this.member = true;
      this.memberbounce = true;
      //reset the animation
      setTimeout(()=>{
        this.memberbounce = false;
      }, 800);
    }else{
      this.executive = true;
      this.executivebounce = true;
      //reset the animation
      setTimeout(()=>{
        this.executivebounce = false;
      }, 800);
    }
  }


  reset(){
    this.category = '';
    this.member = this.memberbounce = this.executive = this.executivebounce = false;
  }

  verifyLogin(username:string, password:string){
    Meteor.loginWithPassword(username, password, (err)=>{
      if(!err){
        this.router.navigate(['admin']);
        Session.set('USERNAME',username);
      }
    });  
  }

  //Testing purposes
  // registerUser(){
  //   Accounts.createUser({
  //     'username':this.username,
  //     'password':this.password,
  //     'profile':{
  //       'firstname':this.firstname,
  //       'lastname':this.lastname
  //     }
  //   });
  // }
}