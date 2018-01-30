import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInModalModule } from './modals/signInModal.module';

import { NavbarComponent } from  './navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SignInModalModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})

export class NavbarModule { }
