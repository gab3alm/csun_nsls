import {Meteor} from 'meteor/meteor';
import {FAQ} from '../collections/questions';

Meteor.methods({
  // Create new FAQ Question
  createQuestion: function(question_title:string, question_answer:string){
    FAQ.insert({
      'question':question_title,
      'answer':question_answer
    });
  },

  // Delete FAQ Question
  deleteQuestion: function(questionID:string){
    FAQ.remove({"_id":questionID});
  },

  // Update FAQ Question Information
  updateQuestion: function(questionID:string, question_title:string, question_answer:string){
    FAQ.update({'_id':questionID}, {$set:{
      'question':question_title,
      'answer':question_answer
    }});
  }

});