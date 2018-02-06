import { Component } from "@angular/core";

import templateString from "./resendConfirmationModal.component.html";

@Component({
  selector: "resend-confirmation",
  template: templateString,
})

export class ResendConfirmationModalComponent {
  public user: object = {};

  public ngOnDestroy() {
    this.user = null;
  }
}
