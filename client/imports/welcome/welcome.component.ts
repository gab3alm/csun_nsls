import {Component} from '@angular/core';
import {SliderComponent} from './slider.component';


import template from './welcome.html';
@Component({
  selector:'welcome',
  template,
  directives:[SliderComponent]
})

export class WelcomeComponent{

}



