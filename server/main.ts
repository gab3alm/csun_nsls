import "./imports/events";
import "./imports/event.methods"
import "./imports/snt.methods.ts"
import "../both/collections/questions.methods"
import './imports/faq';
import './imports/snt_groups';
import {ServerSession} from 'meteor/matteodem:server-session';

Meteor.onConnection(function(connection){
  ServerSession.set('clientIP',connection.clientAddress);
});