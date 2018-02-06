import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LoadingIconComponent } from "../../components/loadingIcon.component";
import { ValidateEmail } from "../../directives/validations/validateEmail.directive";
import { ValidateEqual } from "../../directives/validations/validateEqual.directive";
import { ValidateLowercaseLetter } from "../../directives/validations/validateLowercaseLetter.directive";
import { ValidateNumber } from "../../directives/validations/validateNumber.directive";
import { ValidatePattern } from "../../directives/validations/validatePattern.directive";
import { ValidateUppercaseLetter } from "../../directives/validations/validateUppercaseLetter.directive";
import { ForgotPasswordModalComponent } from "./forgotPasswordModal.component";
import { LoginModalComponent } from "./loginModal.component";
import { ResendConfirmationModalComponent } from "./resendConfirmationModal.component";
import { ForgotPasswordLinkComponent } from "./shared/forgotPasswordLink.component";
import { LoginLinkComponent } from "./shared/loginLink.component";
import { ResendConfirmationLinkComponent } from "./shared/resendConfirmationLink.component";
import { SignUpLinkComponent } from "./shared/signUpLink.component";
import { SignInModalComponent } from "./signInModal.component";
import { SignUpModalComponent } from "./signUpModal.component";

import { UserActions } from "../../user/user.actions";

@NgModule({
  declarations: [
    ForgotPasswordLinkComponent,
    ForgotPasswordModalComponent,
    LoginLinkComponent,
    LoadingIconComponent,
    LoginModalComponent,
    ResendConfirmationLinkComponent,
    ResendConfirmationModalComponent,
    SignInModalComponent,
    SignUpLinkComponent,
    SignUpModalComponent,
    ValidateEmail,
    ValidateEqual,
    ValidateLowercaseLetter,
    ValidateUppercaseLetter,
    ValidateNumber,
    ValidatePattern,
  ],
  exports: [
    SignInModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [UserActions],
})

export class SignInModalModule { }
