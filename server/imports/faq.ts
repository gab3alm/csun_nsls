import {Meteor} from 'meteor/meteor';
import {FAQ} from '../../both/collections/questions';

// publish all data in the FAQ collection
Meteor.publish('getFAQ', function(){
  return FAQ.find();
});