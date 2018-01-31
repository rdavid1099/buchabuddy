import { NgRedux } from "@angular-redux/store";
import { Component } from "@angular/core";

import { IAppState } from "../../../../store";
import { NavbarActions } from "../../navbar.actions";

@Component({
  selector: "login-link",
  template: "<small class=\"form-text text-muted\">" +
              "Already have an account? <span class=\"style-link\"" +
              "(click)=\"loadLoginModal()\">Sign in</span>" +
            "</small>",
})

export class LoginLinkComponent {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) { }

  public loadLoginModal() {
    this.ngRedux.dispatch(this.actions.login());
  }
}
