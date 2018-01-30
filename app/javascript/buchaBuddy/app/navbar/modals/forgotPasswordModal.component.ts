import { Component } from "@angular/core";

import templateString from "./forgotPasswordModal.component.html";

@Component({
  selector: "forgot-password",
  template: templateString,
})

export class ForgotPasswordModalComponent {
  public user: object = {};

  constructor() {
    this.user = {};
  }
}
