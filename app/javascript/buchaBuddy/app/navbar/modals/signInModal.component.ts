import { NgRedux } from "@angular-redux/store";
import { Component } from "@angular/core";

import { IAppState } from "../../../store";
import { NavbarActions } from "../navbar.actions";
import templateString from "./signInModal.component.html";

@Component({
  selector: "sign-in-modal",
  template: templateString,
})

export class SignInModalComponent {
  public modalState: string;
  public signUpCta: object = {
    body: "Don't have an account?",
    link: "Sign up",
  };
  public loginCta: object = {
    body: "Already have an account?",
    link: "Sign in",
  };
  public content: object = {
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
  public subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) {
    this.subscription = ngRedux.select<string>("modalState")
      .subscribe((newModalState) => this.modalState = newModalState);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
