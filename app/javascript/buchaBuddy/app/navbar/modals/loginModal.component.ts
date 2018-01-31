import { Component } from "@angular/core";

import templateString from "./loginModal.component.html";

@Component({
  selector: "login",
  template: templateString,
})

export class LoginModalComponent {
  public user: object = {};

  public ngOnDestroy() {
    this.user = null;
  }
}
