import {Component} from '@angular/core';
import {SNTgroupCardComponent} from './snt-group-card.component';
import {MaterializeDirective} from 'angular2-materialize';


import template from './snt-land.html';
@Component({
  selector:'snt-land',
  template,
  styleUrls:['styles/snt-land.css'],
  directives:[SNTgroupCardComponent, MaterializeDirective]
})

export class SNTlandComponent{
  // fields for SNT group creation form  
  group_name:string;
  first_name:string;
  last_name:string;
  email:string;
  availability:string[];
  
  constructor(){

  }

}