import { NgRedux } from "@angular-redux/store";
import { Component } from "@angular/core";

import { IAppState } from "../../../store/store.model";
import { NavbarActions } from "../../api/navbar.actions";

@Component({
  selector: "resend-confirmation-link",
  template: "<small class=\"form-text style-link col-sm-5\" (click)=\"loadResendConfirmationModal()\">" +
              "Email confirmation" +
            "</small>",
})

export class ResendConfirmationLinkComponent {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) { }

  public loadResendConfirmationModal() {
    this.ngRedux.dispatch(this.actions.resendConfirmation());
  }
}
