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

  contructor(){
    this.valuecard1 = [{'value':'testing1', 'description':'testing1'}];
    this.valuecard2 = [{'value':'testing2', 'description':'testing2'}];
    this.valuecard3 = [{'value':'testing3', 'description':'testing3'}];
    this.valuecard4 = [{'value':'testing4', 'description':'testing4'}];
  }
}



