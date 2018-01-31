import { NgRedux } from "@angular-redux/store";
import { Component } from "@angular/core";

import { IAppState } from "../../../../store";
import { NavbarActions } from "../../navbar.actions";

@Component({
  selector: "sign-up-link",
  template: "<small class=\"form-text text-muted\">" +
              "Don't have an account? <span class=\"style-link\"" +
              "(click)=\"loadSignUpModal()\">Sign up</span>" +
            "</small>",
})

export class SignUpLinkComponent {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) { }

  public loadSignUpModal() {
    this.ngRedux.dispatch(this.actions.signUp());
  }
}
