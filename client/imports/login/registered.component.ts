import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import template from './registered.html';
@Component({
  selector:'registration-complete',
  template,
  styleUrls:['styles/registered.css']
})

export class RegisteredComponent{
  constructor(public router:Router){}

  navigate(){
    this.router.navigate(['']);
  }
}
