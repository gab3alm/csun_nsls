import {RouterConfig, provideRouter} from '@angular/router';
import {WelcomeComponent} from './imports/welcome/welcome.component';
import {LoginComponent} from './imports/login/login.component';
import {AdministrationComponent} from './imports/administration/administration.component';
import {AdminWelcomeComponent} from './imports/administration/admin-welcome.component';
import {EventsetupComponent} from './imports/administration/event-setup.component';
import {EventrecordsComponent} from './imports/administration/event-records.component';
import {FaqComponent} from './imports/faq/faq.component';
import {FaqControlComponent} from './imports/administration/faq-control.component';
import {RequirementsComponent} from './imports/requirements/requirements.component';
import {RegisteredComponent} from './imports/login/registered.component';
import {SNTlandComponent} from './imports/snt_land/snt-land.component';

const routes : RouterConfig =
[
  {path:'', component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'faq', component:FaqComponent},
  {path:'success', component:RegisteredComponent},
  {path:'admin', component:AdministrationComponent, children:[
    {path:'', component:AdminWelcomeComponent}, 
    {path:'setup', component: EventsetupComponent},
    {path:'records', component: EventrecordsComponent},
    {path:'faq', component:FaqControlComponent}
  ]},
  {path:'requirements', component:RequirementsComponent},
  {path:'snt', component: SNTlandComponent}
];

export const APP_ROUTER = [provideRouter(routes)];


