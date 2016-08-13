import {Component, Input} from '@angular/core';

import template from './valuecard.html';
@Component({
  selector:'value-card',
  template,
  styleUrls:['styles/valuecard.css']
})

export class ValuecardComponent{
  @Input() card;
}