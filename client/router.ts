import {RouterConfig, provideRouter} from '@angular/router';
import {WelcomeComponent} from './imports/welcome/welcome.component';
import {LoginComponent} from './imports/login/login.component';
import {AdministrationComponent} from './imports/administration/administration.component';
import {AdminWelcomeComponent} from './imports/administration/admin-welcome.component';
import {EventsetupComponent} from './imports/administration/event-setup.component';
import {EventrecordsComponent} from './imports/administration/event-records.component';
import {FaqComponent} from './imports/faq/faq.component';
import {FaqControlComponent} from './imports/administration/faq-control.component';

const routes : RouterConfig = [
  {path:'',component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'faq', component:FaqComponent},
  {path:'admin', component:AdministrationComponent, children:[
    {path:'', component:AdminWelcomeComponent}, 
    {path:'setup', component: EventsetupComponent},
    {path:'records', component: EventrecordsComponent},
    {path:'faq', component:FaqControlComponent}
  ]}
];

export const APP_ROUTER = [provideRouter(routes)];


