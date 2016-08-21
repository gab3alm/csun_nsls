import "./imports/events";
import "../both/collections/event.methods"
import "../both/collections/questions.methods"
import './imports/faq';
import {ServerSession} from 'meteor/matteodem:server-session';

Meteor.onConnection(function(connection){
  ServerSession.set('clientIP',connection.clientAddress);
});