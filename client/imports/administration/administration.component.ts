import {Component, OnInit} from '@angular/core';
import {Meteor} from 'meteor/meteor';
import {Router} from '@angular/router';
import {Session} from 'meteor/session';
import {ROUTER_DIRECTIVES} from '@angular/router';


import template from './administration.html';
@Component({
  selector:'administration',
  template,
  styleUrls:['styles/administration.css'],
  directives:[ROUTER_DIRECTIVES]
})

export class AdministrationComponent implements OnInit{
  username:string;
  constructor(public router:Router){}

  ngOnInit(){
    this.username = Session.get('USERNAME');
    // If user is not legit, return them to landing page
    if(!(!!Meteor.user())){
      this.router.navigate(['']);
    }else{
      this.username = Session.get('USERNAME');
    }
  }
}