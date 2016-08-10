import {RouterConfig, provideRouter} from '@angular/router';
import {WelcomeComponent} from './imports/welcome/welcome.component';

const routes : RouterConfig = [
  {path:'',component:WelcomeComponent}
];

export const APP_ROUTER = [provideRouter(routes)];


