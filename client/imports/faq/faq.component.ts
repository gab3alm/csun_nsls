import {Component, OnInit} from '@angular/core';
import {MeteorComponent} from 'angular2-meteor';
import {MaterializeDirective} from 'angular2-materialize';
import {FAQ} from '../../../both/collections/questions';
import {QuestionModel} from '../../../both/models/question.model';

import template from './faq.html';
@Component({
  selector:'faq',
  template,
  styleUrls:['styles/faq.css'],
  directives:[MaterializeDirective]
})

export class FaqComponent extends MeteorComponent implements OnInit{
  questions: Mongo.Cursor<QuestionModel>;
  constructor(){
    super();
  }

  ngOnInit(){
    // Get all data for FAQ ready
    this.subscribe('getFAQ', ()=>{
      this.questions = FAQ.find();
    });   
  }

}