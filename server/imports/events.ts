import {Events} from '../../both/collections/events';
import {Meteor} from 'meteor/meteor';

// Return only active events
Meteor.publish('ActiveEvents', function(){
  return Events.find({'status':'active'});
});

// Return only archived events
Meteor.publish('ArchivedEvents', function(){
  return Events.find({'archived':'true'});
});

 // Return all events
 Meteor.publish('Events', function(){
   return Events.find();
 });