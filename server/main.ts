import "./imports/events";
import "../both/collections/methods"
import {ServerSession} from 'meteor/matteodem:server-session';

Meteor.onConnection(function(connection){
  ServerSession.set('clientIP',connection.clientAddress);
});