import { Component } from "@angular/core";
import { Angular2TokenService } from "angular2-token";
import * as $ from "jquery";

import templateString from "./forgotPasswordModal.component.html";

@Component({
  selector: "forgot-password",
  template: templateString,
})

export class ForgotPasswordModalComponent {
  public user: {email: string};

  constructor(
    private tokenService: Angular2TokenService,
  ) {
    this.tokenService.init();
    this.user = {
      email: "",
    };
  }

  public submit() {
    this.tokenService.resetPassword({
      email: this.user.email,
    }).subscribe(
      (res) => {
        console.log(res);
        $("#signInModalCenter").modal("hide");
      },
      (err) => console.log(err),
    );
  }

  public ngOnDestroy() {
    this.user = null;
  }
}
