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
  valuecard1:Array<Object>;
  valuecard2:Array<Object>;
  valuecard3:Array<Object>;
  valuecard4:Array<Object>;


}



