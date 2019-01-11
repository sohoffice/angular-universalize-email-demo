import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { EmailWelcomeComponent } from './email-welcome/email-welcome.component';
import {EmailMaterialModule} from '../email-material/email-material.module';

@NgModule({
  declarations: [EmailWelcomeComponent],
  imports: [
    CommonModule,
    EmailRoutingModule,
    EmailMaterialModule
  ],
  exports: [
    EmailWelcomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EmailModule { }
