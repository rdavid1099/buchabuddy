import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

import { IAppState } from "../../store/store.model";
import { UserActions } from "../../user/user.actions";
import templateString from "./loginModal.component.html";

@Component({
  selector: "login",
  template: templateString,
})

export class LoginModalComponent implements OnInit {
  public user;

  constructor(
    private tokenService: Angular2TokenService,
    private ngRedux: NgRedux<IAppState>,
    private actions: UserActions,
  ) {
    this.tokenService.init();
  }

  public ngOnInit() {
    this.user = {
      email: "",
      password: "",
    };
  }

  public submit() {
    this.tokenService.signIn(
      this.user,
    ).subscribe(
      (res) => {
        console.log(res);
        this.ngRedux.dispatch(this.actions.signIn());
      },
      (err) => {
        console.log(err);
        debugger
      },
    );
  }

  public ngOnDestroy() {
    this.user = null;
  }
}
