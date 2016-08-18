import {Component, OnInit} from '@angular/core';
import {Events} from '../../../both/collections/events';
import {MeteorComponent} from 'angular2-meteor';
import {Mongo} from 'meteor/mongo';
import {EventModel} from '../../../both/models/eventmodel';
import {MaterializeDirective} from 'angular2-materialize';
import {ROUTER_DIRECTIVES} from '@angular/router';

import template from './event-records.html';
@Component({
  selector:'event-records',
  template,
  styleUrls:['styles/event-records.css'],
  directives:[MaterializeDirective, ROUTER_DIRECTIVES]
})

export class EventrecordsComponent extends MeteorComponent implements OnInit{
  ActiveEvents:Mongo.Cursor<EventModel>;
  ArchivedEvents:Mongo.Cursor<EventModel>;
  ShowActive:boolean;
  
  constructor(){
    super();
    // Active event side is rendered by default
    this.ShowActive = true;
  }

  ngOnInit(){
    // Create List of Active/Archived Events
    this.subscribe('Events', ()=>{
      this.ActiveEvents = Events.find({'status':'active'});
      this.ArchivedEvents = Events.find({'archived':true});
    });
  }

  activateEvent(EventID){
    this.call('activateEvent', EventID);
  }

  archiveEvent(EventID){
    this.call('archiveEvent', EventID);
  }

  show(section){
    if(section == 'active'){
      this.ShowActive = true;
    }else{
      this.ShowActive = false;
    }
  }
}