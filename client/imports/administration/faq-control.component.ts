import {Component, OnInit} from '@angular/core';
import {MeteorComponent} from 'angular2-meteor';
import {FAQ} from '../../../both/collections/questions';
import {QuestionModel} from '../../../both/models/question.model';
import {MaterializeDirective} from 'angular2-materialize';
import {NgForm} from '@angular/forms';
// import '../../../both/collections/questions.methods';

import template from './faq-control.html';
@Component({
  selector:'faq-control',
  template,
  styleUrls:['styles/faq-control.css'],
  directives:[MaterializeDirective, NgForm]
})

export class FaqControlComponent extends MeteorComponent implements OnInit{
  questions:Mongo.Cursor<QuestionModel>;
  // Question Creation Fields
  question:string;
  answer:string;

  constructor(){
    super();
  }

  ngOnInit(){
    this.subscribe('getFAQ', ()=>{
      this.questions = FAQ.find();
    });
  }

  // Create new Question
  createQuestion(question, answer){
    this.call('createQuestion', question, answer);
  }

  // Delete Question - Permanent
  deleteQuestion(questionID){
    this.call('deleteQuestion', questionID);
  }  

  // Update Question
  updateQuestion(questionID, question, answer){
    this.call('updateQuestion', questionID, question, answer);
  }

  setupUpdate(question:string, answer:string){
    this.question = question;
    this.answer = answer;
  }

  reset(){
    this.question = this.answer = '';
  }
}
