import {Meteor} from 'meteor/meteor';
import {Events} from './events';
import {Attendee} from '../classes/attendee';
import {ServerSession} from 'meteor/matteodem:server-session';



Meteor.methods({
  // Create a new event and make it ready for members to see it.
  createEvent: function(name:string){
    var date = new Date().toString();
    Events.insert({
      'creator': Meteor.userId(),
      'name':name,
      'date':date,
      'status':'active',
      'attendants':[]
    });
  },

  // Create Event attendee record
  eventSignIn: function(eventID:string, ticket:string, firstname:string, lastname:string, email:string, phone:string){
    var date = new Date().toString(); //date and time of sign in
    var clientIP = ServerSession.get('clientIP');
    var attendee = new Attendee(clientIP, ticket, firstname, lastname, email, phone, date, false);
    Events.update({'_id':eventID}, {$addToSet:{
      'attendants': attendee
    }}, {upsert:true});  
  }

});
