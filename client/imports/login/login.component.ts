import {Component, OnInit} from '@angular/core';
import {MeteorComponent} from 'angular2-meteor';
import {NgClass} from '@angular/common';
import {NgForm} from '@angular/forms';
import {Meteor} from 'meteor/meteor';
import {Router} from '@angular/router';
import {Accounts} from 'meteor/accounts-base';
import {Session} from 'meteor/session';
import {EventModel} from '../../../both/models/eventmodel';
import {Events} from '../../../both/collections/events';
import {MaterializeDirective} from 'angular2-materialize';


import template from './login.html';
@Component({
  selector:'login',
  template,
  styleUrls:['styles/login.css'],
  directives:[NgClass, NgForm, MaterializeDirective]
})

export class LoginComponent extends MeteorComponent implements OnInit{
  // EVENT REGISTRATION
  username:string; // Admin sign in
  password:string; // Admin sign in
  ticket:string; // Member sign in
  firstname:string; // Member sign in
  lastname:string;// Member sign in
  email:string;// Member sign in
  phone:string; // member sign in

  success:boolean;

  // FORM ATTRIBUTES
  category:string;
  member:boolean; memberbounce:boolean;
  executive:boolean; executivebounce:boolean;
  // EVENTS
  ActiveEvents:Mongo.Cursor<EventModel>;

  constructor(public router:Router){
    super();
  }

  ngOnInit(){
    this.subscribe('ActiveEvents', ()=>{
      this.ActiveEvents = Events.find();
    });
  }

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

  eventSignIn(eventID:string, ticket:string, firstname:string, lastname:string, email:string, phone:string){
    this.call('eventSignIn', eventID, ticket, firstname, lastname, email, phone);
    this.router.navigate(['login']);
    this.success = true;
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