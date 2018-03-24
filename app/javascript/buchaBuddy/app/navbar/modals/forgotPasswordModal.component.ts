import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";
import * as $ from "jquery";

import * as FlashMessageActions from "../../flashMessage/api/flashMessage.actions";
import { IMessage } from "../../flashMessage/api/imessage.interface";
import { IAppState } from "../../store/store.model";
import { NavbarActions } from "../api/navbar.actions";
import templateString from "./forgotPasswordModal.component.html";

@Component({
  selector: "forgot-password",
  template: templateString,
})

export class ForgotPasswordModalComponent implements OnInit {
  public dataDisable: boolean;
  public user: {
    backendErr: string;
    email: string;
  };

  private confirmFlashMessage: boolean;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private tokenService: Angular2TokenService,
    private actions: NavbarActions,
  ) { }

  public ngOnInit() {
    this.dataDisable = false;
    this.confirmFlashMessage = false;
    this.resetUser();
    $("#signInModalCenter").on("hidden.bs.modal", (e) => {
      this.ngRedux.dispatch(this.actions.unmountModal());
      if (this.confirmFlashMessage) {
        const message: IMessage = {
          messages: [
            "You will receive an email with instructions on how to reset your password in a few minutes.",
          ],
          status: "200",
          statusText: "OK",
          type: "success",
        };
        this.ngRedux.dispatch(new FlashMessageActions.Load(message).dispatch());
      }
    });
  }

  public submit() {
    this.dataDisable = true;
    this.tokenService.resetPassword({
      email: this.user.email,
    }).subscribe(
      (res) => {
        this.confirmFlashMessage = true;
        $("#signInModalCenter").modal("hide");
      },
      (err) => {
        this.dataDisable = false;
        const message: IMessage = {
          messages: err.json().errors,
          status: err.status.toString(),
          statusText: err.statusText,
          type: "error",
        };
        this.resetUser(err.status.toString());
        this.ngRedux.dispatch(new FlashMessageActions.Load(message).dispatch());
      },
    );
  }

  public ngOnDestroy() {
    this.user = null;
  }

  private resetUser(backendErr: string = null) {
    this.user = {
      backendErr,
      email: "",
    };
  }
}
