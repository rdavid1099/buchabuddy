import { NgRedux } from "@angular-redux/store";
import { Component } from "@angular/core";

import { IAppState } from "../store/store.model";
import { NavbarActions } from "./api/navbar.actions";
import templateString from "./navbar.component.html";

@Component({
  selector: "navbar",
  template: templateString,
})

export class NavbarComponent {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) { }

  public loadLoginModal() {
    this.ngRedux.dispatch(this.actions.login());
  }

  public loadSignUpModal() {
    this.ngRedux.dispatch(this.actions.signUp());
  }
}
