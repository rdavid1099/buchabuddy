import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ValidateEmail } from "../../directives/validateEmail.directive";
import { ForgotPasswordModalComponent } from "./forgotPasswordModal.component";
import { LoginModalComponent } from "./loginModal.component";
import { ForgotPasswordLinkComponent } from "./shared/forgotPasswordLink.component";
import { LoginLinkComponent } from "./shared/loginLink.component";
import { SignUpLinkComponent } from "./shared/signUpLink.component";
import { SignInModalComponent } from "./signInModal.component";
import { SignUpModalComponent } from "./signUpModal.component";

@NgModule({
  declarations: [
    ForgotPasswordLinkComponent,
    ForgotPasswordModalComponent,
    LoginLinkComponent,
    LoginModalComponent,
    SignInModalComponent,
    SignUpLinkComponent,
    SignUpModalComponent,
    ValidateEmail,
  ],
  exports: [
    SignInModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})

export class SignInModalModule { }
