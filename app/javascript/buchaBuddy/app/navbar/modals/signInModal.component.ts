import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

import { IAppState } from "../../store/store.model";
import { NavbarActions } from "../api/navbar.actions";
import templateString from "./signInModal.component.html";

@Component({
  selector: "sign-in-modal",
  template: templateString,
})

export class SignInModalComponent implements OnInit {
  public modalState: string;

  public content: object = {
    forgotPassword: {
      footers: {
        loginLink: true,
      },
      header: "Forgot Your Password?",
    },
    login: {
      footers: {
        signUpLink: true,
      },
      header: "Sign In",
    },
    resendConfirmation: {
      footers: {
        loginLink: true,
      },
      header: "Confirm Your Email",
    },
    signUp: {
      footers: {
        loginLink: true,
      },
      header: "Create Account",
    },
  };

  private subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) {
    this.subscription = ngRedux.select<string>("modalState")
      .subscribe((newModalState) => this.modalState = newModalState);
  }

  public ngOnInit() {
    $("#signInModalCenter").on("hidden.bs.modal", (e) => {
      this.ngRedux.dispatch(this.actions.unmountModal());
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
