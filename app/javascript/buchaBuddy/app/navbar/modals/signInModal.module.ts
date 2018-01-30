import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LoginModalComponent } from "./loginModal.component";
import { SignInModalComponent } from "./signInModal.component";
import { SignUpModalComponent } from "./signUpModal.component";

@NgModule({
  declarations: [
    LoginModalComponent,
    SignInModalComponent,
    SignUpModalComponent,
  ],
  exports: [
    SignInModalComponent,
  ],
  imports: [
    CommonModule,
  ],
})

export class SignInModalModule { }
