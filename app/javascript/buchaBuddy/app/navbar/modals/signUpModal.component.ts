import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

import { IUser } from "./iuser.interface";
import templateString from "./signUpModal.component.html";

@Component({
  selector: "sign-up",
  template: templateString,
})

export class SignUpModalComponent implements OnInit {
  public user: IUser;

  constructor(
    private tokenService: Angular2TokenService,
  ) {
    this.tokenService.init();
  }

  public ngOnInit() {
    this.user = {
      email: "",
      password: "",
      password_confirmation: "",
      username: "",
    };
  }

  public submit() {
    this.tokenService.registerAccount({
      email:                this.user.email,
      password:             this.user.password,
      passwordConfirmation: this.user.password_confirmation,
      username:             this.user.username,
    }).subscribe(
        (res) =>      console.log(res),
        (error) =>    console.log(error),
    );
  }

  public ngOnDestroy() {
    this.user = null;
  }

  private setParams() {
    const params = {};
    Object.keys(this.user).forEach((key) => {
      params[key] = this.user[key];
    });
    return params;
  }
}
