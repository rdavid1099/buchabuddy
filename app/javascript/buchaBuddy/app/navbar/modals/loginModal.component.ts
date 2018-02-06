import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

import { IAppState } from "../../store/store.model";
import { IUser } from "../../user/iuser.interface";
import * as UserActions from "../../user/user.actions";
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
        const sanitized = res.json().data;
        const authUser: IUser = {
          email: sanitized.uid,
          id: sanitized.id,
          username: sanitized.username,
        };
        this.ngRedux.dispatch(new UserActions.Login(authUser).dispatch());
      },
      (err) => {
        console.log(err);
      },
    );
  }

  public ngOnDestroy() {
    this.user = null;
  }
}
