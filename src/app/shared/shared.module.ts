import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MaterialModule} from '../material/material.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  declarations: [NavbarComponent, FooterComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    HttpClientModule,
  ]
})
export class SharedModule {
}
