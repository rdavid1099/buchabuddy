import { NgRedux } from "@angular-redux/store";
import { Component } from "@angular/core";

import { IAppState } from "../../../../store";
import { NavbarActions } from "../../navbar.actions";

@Component({
  selector: "forgot-password-link",
  template: "<small class=\"form-text style-link col-sm-5\" (click)=\"loadForgotPasswordModal()\">" +
              "Forgot your password?" +
            "</small>",
})

export class ForgotPasswordLinkComponent {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) { }

  public loadForgotPasswordModal() {
    this.ngRedux.dispatch(this.actions.forgotPassword());
  }
}
