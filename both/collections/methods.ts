import {Meteor} from 'meteor/meteor';
import {Events} from './events';

Meteor.methods({
  createEvent: function(name:string, date:string, status:string){
    Events.insert({
      'creator': Meteor.userId(),
      'name':name,
      'date':date,
      'status':status,
      'attendants':[]
    });
  }
});
