import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

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
  }

  public submit() {
    this.tokenService.registerAccount(this.sanitizedParams()).subscribe(
        (res) =>      console.log(res),
        (error) =>    console.log(error),
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
