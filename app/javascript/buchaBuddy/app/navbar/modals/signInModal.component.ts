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

  public content: object = {
    forgotPassword: {
      footers: {
        loginLink: true,
        signUpLink: true,
      },
      header: "Forgot Your Password?",
    },
    login: {
      footers: {
        signUpLink: true,
      },
      header: "Sign In",
    },
    signUp: {
      footers: {
        loginLink: true,
      },
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
