import { Component } from "@angular/core";

import templateString from "./navbar.component.html";

@Component({
  selector: "navbar",
  template: templateString,
})

export class NavbarComponent {
  public selected = "login";

  public loadSignInModal() {
    this.selected = "login";
  }
}
