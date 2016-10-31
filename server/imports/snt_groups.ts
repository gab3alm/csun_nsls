import {SNTgroups} from '../../both/collections/snt';
import {Meteor} from 'meteor/meteor';

// Return all snt groups
Meteor.publish('snt_groups', function(){
  return SNTgroups.find();
});