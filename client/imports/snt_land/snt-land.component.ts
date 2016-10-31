import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {SNTgroupCardComponent} from './snt-group-card.component';
import {MaterializeDirective} from 'angular2-materialize';
import {snt_member} from '../../../both/classes/snt_member';
import {MeteorComponent} from 'angular2-meteor';

// importing SNT groups collection
import {SNTgroups} from '../../../both/collections/snt';
import {sntGroupModel} from '../../../both/models/snt_group_model';
import {Mongo} from 'meteor/mongo';

import template from './snt-land.html';
@Component({
  selector:'snt-land',
  template,
  styleUrls:['styles/snt-land.css'],
  directives:[SNTgroupCardComponent, MaterializeDirective, NgModel]
})

export class SNTlandComponent extends MeteorComponent implements OnInit {
  // fields for SNT group creation form  
  group_name:string;
  first_name:string;
  last_name:string;
  email:string;
  availability:string[] = new Array(6);

  // holder for snt groups
  snt_groups: Mongo.Cursor<sntGroupModel>;

  constructor(){
    super();
  }

  ngOnInit(){
    this.subscribe('snt_groups', ()=>{
      this.snt_groups = SNTgroups.find();
    });
  }

  // Create new SNT group
  createNewSntGroup(group_name:string, first_name:string, last_name:string, email:string, availability:string[]){
    var auth_code = this.RandomAuthCode(6);
    var founder = new snt_member(true, auth_code, first_name, last_name, email, availability);
    this.call('createSntGroup', group_name, auth_code, founder);
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