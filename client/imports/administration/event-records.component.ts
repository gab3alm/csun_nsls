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
  Events:Mongo.Cursor<EventModel>;
  constructor(){
    super();
  }

  ngOnInit(){
    this.subscribe('Events', ()=>{
      this.Events = Events.find();
    });
  }

  activateEvent(EventID){
    this.call('activateEvent', EventID);
  }

}