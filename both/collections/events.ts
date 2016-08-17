import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {EventModel} from '../models/eventmodel';

export let Events = new Mongo.Collection<EventModel>('events');

// Check if user is logged in
function loggedIn() {
  return !!Meteor.user();
}
 
// Only allows insertion if user is logged in
Events.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});