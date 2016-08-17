import {Component, OnInit} from '@angular/core';
import {Events} from '../../../both/collections/events';
import {MeteorComponent} from 'angular2-meteor';
import {Mongo} from 'meteor/mongo';
import {EventModel} from '../../../both/models/eventmodel';
import {MaterializeDirective} from 'angular2-materialize';


import template from './event-records.html';
@Component({
  selector:'event-records',
  template,
  styleUrls:['styles/event-records.css'],
  directives:[MaterializeDirective]
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


}