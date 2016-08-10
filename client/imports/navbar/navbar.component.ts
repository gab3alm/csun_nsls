import {Component} from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';

import template from './navbar.html';
@Component({
  selector:'navbar',
  template,
  styleUrls:['styles/navbar.css'],
  directives:[MaterializeDirective]
})

export class NavbarComponent{

}
