import {Component} from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';

import template from './slider.html';
@Component({
  selector:'slides',
  template,
  styleUrls:['styles/slider.css'],
  directives:[MaterializeDirective]
})

export class SliderComponent{}