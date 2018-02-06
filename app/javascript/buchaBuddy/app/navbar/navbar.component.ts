import { NgRedux } from "@angular-redux/store";
import { Component } from "@angular/core";

import { IAppState } from "../store/store.model";
import { IUser } from "../user/iuser.interface";
import { NavbarActions } from "./api/navbar.actions";
import templateString from "./navbar.component.html";

@Component({
  selector: "navbar",
  template: templateString,
})

export class NavbarComponent {
  public loggedIn: boolean;
  public currentUser: IUser = null;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) {
    ngRedux.select<boolean>("loggedIn")
      .subscribe((newLoggedInState) => this.loggedIn = newLoggedInState);
    ngRedux.select<IUser>("currentUser")
      .subscribe((newCurrentUserState) => this.currentUser = newCurrentUserState);
  }

  public loadLoginModal() {
    this.ngRedux.dispatch(this.actions.login());
  }

  public loadSignUpModal() {
    this.ngRedux.dispatch(this.actions.signUp());
  }
}
