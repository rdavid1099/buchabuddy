import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LoginModalComponent } from "./loginModal.component";
import { SignInModalComponent } from "./signInModal.component";

@NgModule({
  declarations: [
    LoginModalComponent,
    SignInModalComponent,
  ],
  exports: [
    SignInModalComponent,
  ],
  imports: [
    CommonModule,
  ],
})

export class SignInModalModule { }
