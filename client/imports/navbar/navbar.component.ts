import {Component} from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';
import {ROUTER_DIRECTIVES} from '@angular/router';

import template from './navbar.html';
@Component({
  selector:'navbar',
  template,
  styleUrls:['styles/navbar.css'],
  directives:[MaterializeDirective, ROUTER_DIRECTIVES]
})

export class NavbarComponent{

}
