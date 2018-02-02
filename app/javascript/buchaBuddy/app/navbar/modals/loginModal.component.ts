import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

import templateString from "./loginModal.component.html";

@Component({
  selector: "login",
  template: templateString,
})

export class LoginModalComponent implements OnInit {
  public user;

  constructor(
    private tokenService: Angular2TokenService,
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
      (res) => console.log(res),
      (err) => console.log(err),
    );
  }

  public ngOnDestroy() {
    this.user = null;
  }
}
