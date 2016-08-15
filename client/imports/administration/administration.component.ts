import {Component, OnInit} from '@angular/core';
import {Meteor} from 'meteor/meteor';
import {Router} from '@angular/router';
import {Session} from 'meteor/session';

import template from './administration.html';
@Component({
  selector:'administration',
  template,
  styleUrls:['styles/administration.css']
})

export class AdministrationComponent implements OnInit{
  username:string;
  constructor(public router:Router){}

  ngOnInit(){
    // If user is not legit, return them to landing page
    if(!(!!Meteor.user())){
      this.router.navigate(['']);
    }else{
      this.username = Session.get('USERNAME');
    }
  }
}