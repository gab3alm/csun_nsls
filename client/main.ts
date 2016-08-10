import {Component} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {ROUTER_DIRECTIVES} from '@angular/router';
import "angular2-materialize";
import {NavbarComponent} from './imports/navbar/navbar.component';
import {FooterComponent} from './imports/footer/footer.component';
import {APP_ROUTER} from './router';


import template from './main.html';
@Component({
  selector:'csun-nsls',
  template,
  styleUrls:['styles/main.css'],
  directives:[ROUTER_DIRECTIVES, NavbarComponent, FooterComponent]
})

class Main{}

bootstrap(Main, [
  APP_ROUTER,
  disableDeprecatedForms(),
  provideForms()
  ])
.catch((err: any) => console.error(err));

  
