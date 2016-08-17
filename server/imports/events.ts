import {Events} from '../../both/collections/events';
import {Meteor} from 'meteor/meteor';

// Return only active events
Meteor.publish('ActiveEvents', function(){
  return Events.find({'status':'active'});
});

 // Return all events
 Meteor.publish('Events', function(){
   return Events.find();
 });