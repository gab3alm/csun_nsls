import {Component, Input, OnInit} from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';
import {MeteorComponent} from 'angular2-meteor';
import {snt_member} from '../../../both/classes/snt_member';
import {NgModel} from '@angular/forms';

// import snt group schema
import {sntGroupModel} from '../../../both/models/snt_group_model';

import template from './snt-group-card.html';
@Component({
  selector:'snt-group-card',
  template,
  styleUrls:['styles/snt-group-card.css'],
  directives:[MaterializeDirective, NgModel]
})

export class SNTgroupCardComponent extends MeteorComponent implements OnInit{
  @Input() group: sntGroupModel;
  //new member information fields
  firstname:string;
  lastname:string;
  email:string;
  // array to cover week availability
  availability:string[] = new Array(6);

  constructor(){
    super();
  }

  // add new member to SNT group
  addToSntGroup(group_id:string, firstname:string, lastname:string, email:string, availability:string[]){
    var rand_auth = this.RandomAuthCode(6);
    //please look at the snt_member schema for field descriptions
    var member = new snt_member(false, rand_auth, firstname, lastname, email, availability);
    this.call('addToSntGroup', group_id, member);
  }

  ngOnInit(){

  }

  //script from Mistonline.in (Please dont remove this line)
  RandomAuthCode(length):string {
    var iteration = 0;
    var auth_code = "";
    while(iteration < length){
      var randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;
      if ((randomNumber >=33) && (randomNumber <=47)) { continue; }
      if ((randomNumber >=58) && (randomNumber <=64)) { continue; }
      if ((randomNumber >=91) && (randomNumber <=96)) { continue; }
      if ((randomNumber >=123) && (randomNumber <= 126)) { continue; }
      iteration++;
      auth_code += String.fromCharCode(randomNumber);
    }
    return auth_code;
  }
}