import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInModalComponent } from './signInModal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignInModalComponent
  ],
  exports: [
    SignInModalComponent
  ]
})

export class SignInModalModule { }
