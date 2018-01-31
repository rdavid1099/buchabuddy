import { Component, OnInit } from "@angular/core";

import { IUser } from "./iuser.interface";
import templateString from "./signUpModal.component.html";

@Component({
  selector: "sign-up",
  template: templateString,
})

export class SignUpModalComponent implements OnInit {
  public user: IUser;

  public ngOnInit() {
    this.user = {
      email: "",
      password: "",
      password_confirmation: "",
      username: "",
    };
  }

  public ngOnDestroy() {
    this.user = null;
  }
}
