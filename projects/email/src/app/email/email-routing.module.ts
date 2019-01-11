import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailWelcomeComponent} from './email-welcome/email-welcome.component';

const routes: Routes = [
  {path: 'email/welcome', component: EmailWelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
