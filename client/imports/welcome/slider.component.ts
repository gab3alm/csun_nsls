import {Component} from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';
import {ROUTER_DIRECTIVES} from '@angular/router';

import template from './slider.html';
@Component({
  selector:'slides',
  template,
  styleUrls:['styles/slider.css'],
  directives:[MaterializeDirective, ROUTER_DIRECTIVES]
})

export class SliderComponent{}