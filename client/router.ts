import {RouterConfig, provideRouter} from '@angular/router';
import {WelcomeComponent} from './imports/welcome/welcome.component';
import {LoginComponent} from './imports/login/login.component';
import {AdministrationComponent} from './imports/administration/administration.component';

const routes : RouterConfig = [
  {path:'',component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdministrationComponent}
];

export const APP_ROUTER = [provideRouter(routes)];


