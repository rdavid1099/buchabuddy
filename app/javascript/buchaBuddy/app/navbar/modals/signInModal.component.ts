import { Component } from "@angular/core";
import templateString from "./signInModal.component.html";

@Component({
  selector: "sign-in-modal",
  template: templateString,
})

export class SignInModalComponent {
  public signUpCta = {
    body: "Don't have an account?",
    link: "Sign up",
  };
  public loginCta = {
    body: "Already have an account?",
    link: "Sign in",
  };
  public selected = "login";
  public content = {
    forgotPassword: {
      footers: [this.signUpCta, this.loginCta],
      header: "Forgot Your Password?",
    },
    login: {
      footers: [this.signUpCta],
      header: "Sign In",
    },
    signUp: {
      footers: [this.loginCta],
      header: "Create Account",
    },
  };
}
