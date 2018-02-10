import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";
import * as $ from "jquery";

import { IAppState } from "../../store/store.model";
import { IUser } from "../../user/iuser.interface";
import * as UserActions from "../../user/user.actions";
import { NavbarActions } from "../api/navbar.actions";
import { IUserLogin } from "./iuserlogin.interface";
import templateString from "./signUpModal.component.html";

@Component({
  selector: "sign-up",
  template: templateString,
})

export class SignUpModalComponent implements OnInit {
  public user: IUserLogin;

  constructor(
    private tokenService: Angular2TokenService,
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) {
    this.tokenService.init();
  }

  public ngOnInit() {
    this.user = {
      email: "",
      password: "",
      passwordConfirmation: "",
      username: "",
    };

    $("#signInModalCenter").on("hidden.bs.modal", (e) => {
      this.ngRedux.dispatch(this.actions.unmountModal());
    });
  }

  public submit() {
    this.tokenService.registerAccount(this.sanitizedParams()).subscribe(
        (res) => {
          this.tokenService.signIn(
            this.sanitizedParams(),
          ).subscribe(
            (loginRes) => {
              const sanitized = loginRes.json().data;
              const authUser: IUser = {
                email: sanitized.uid,
                id: sanitized.id,
                username: sanitized.username,
              };
              this.ngRedux.dispatch(new UserActions.Login(authUser).dispatch());
              $("#signInModalCenter").modal("hide");
            },
            (err) => {
              console.log(err);
            },
          );
        },
        (error) => {
          console.log(error);
        },
    );
  }

  public ngOnDestroy() {
    this.user = null;
  }

  private sanitizedParams(): { username: string, email: string, password: string, passwordConfirmation: string } {
    const params: { username: string, email: string, password: string, passwordConfirmation: string } = {
      email: "",
      password: "",
      passwordConfirmation: "",
      username: "",
    };
    Object.keys(this.user).forEach((key) => {
      params[key] = this.user[key];
    });
    return params;
  }
}
