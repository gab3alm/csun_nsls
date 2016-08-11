import {Component} from '@angular/core';
import {SliderComponent} from './slider.component';
import {ValuecardComponent} from './value-card.component';

import template from './welcome.html';
@Component({
  selector:'welcome',
  template,
  directives:[SliderComponent, ValuecardComponent]
})

export class WelcomeComponent{

}



