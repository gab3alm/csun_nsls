import {Meteor} from 'meteor/meteor';
import {Events} from '../../both/collections/events';
import {BackupEvents} from '../../both/collections/backupEvents';
import {Attendee} from '../../both/classes/attendee';
import {EventModel} from '../../both/models/eventmodel';
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
      'archived':false,
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
  },

  // Closes event for members
  closeEvent: function(eventID:string){
    Events.update({'_id':eventID}, {$set: {
      'status':'done',
      'archived':true
    }});
  },

  // Reactivate event for members to sign in
  activateEvent: function(eventID:string){
    Events.update({'_id':eventID}, {$set: {
      'status':'active',
      'archived':false
    }});
  },

  // archive event
  archiveEvent: function(eventID:string){
    Events.update({'_id':eventID}, {$set: {
      'status':'done',
      'archived':true
    }});
  },

  // delete the event (Permanent Deletion)
  deleteEvent:function(eventID:string){
    backupEvent(eventID);
    Events.remove({'_id':eventID});
  }

});

// Backup events, just in case.
function backupEvent(eventID:string){
  var event = Events.find({'_id':eventID}).fetch()[0];
  BackupEvents.insert(event);
}  