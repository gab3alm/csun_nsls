import "./imports/events";
import "./imports/event.methods"
import "../both/collections/questions.methods"
import './imports/faq';
import {ServerSession} from 'meteor/matteodem:server-session';

Meteor.onConnection(function(connection){
  ServerSession.set('clientIP',connection.clientAddress);
});