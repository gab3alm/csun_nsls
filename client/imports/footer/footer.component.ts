import {Component} from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';


import template from './footer.html';
@Component({
  selector:'footer',
  template,
  styleUrls:['styles/footer.css'],
  directives:[MaterializeDirective]
})

export class FooterComponent{
  
}