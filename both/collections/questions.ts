import {Mongo} from 'meteor/mongo';
import {QuestionModel} from '../models/question.model.ts';

export const FAQ = new Mongo.Collection<QuestionModel>('FAQ');

// Check if user is logged in
function loggedIn() {
  return !!Meteor.user();
}
 
// Only allows insertion if user is logged in
FAQ.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});