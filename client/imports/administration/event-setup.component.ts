import {Component, OnInit} from '@angular/core';
import {Events} from '../../../both/collections/events';
import {EventModel} from '../../../both/models/eventmodel';
import {Meteor} from 'meteor/meteor';
import {MeteorComponent} from 'angular2-meteor';
import {MaterializeDirective} from 'angular2-materialize';
import {NgForm} from '@angular/forms';

import template from './event-setup.html';
@Component({
  selector:'event-setup',
  template,
  styleUrls:['styles/event-setup.css'],
  directives:[MaterializeDirective, NgForm]
})

export class EventsetupComponent extends MeteorComponent implements OnInit{
  ActiveEvents:Mongo.Cursor<EventModel>;
  eventName:string;
  constructor(){
    super();
  }

  ngOnInit(){
    this.subscribe('ActiveEvents', ()=>{
      this.ActiveEvents = Events.find();
    });
  }

  createNewEvent(EventName){
    this.call('createEvent', EventName);
  }

  closeEvent(EventID){
    this.call('closeEvent', EventID);
  }
}