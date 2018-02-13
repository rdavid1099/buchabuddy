import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";
import * as $ from "jquery";

import * as FlashMessageActions from "../../flashMessage/api/flashMessage.actions";
import { IMessage } from "../../flashMessage/api/imessage.interface";
import { IAppState } from "../../store/store.model";
import { IUser } from "../../user/iuser.interface";
import * as UserActions from "../../user/user.actions";
import { NavbarActions } from "../api/navbar.actions";
import { IUserLogin } from "./iuserlogin.interface";
import templateString from "./signUpModal.component.html";

@Component({
  selector: "sign-up",
  template: templateString,
})

export class SignUpModalComponent implements OnInit {
  public user: IUserLogin;

  private confirmFlashMessage: boolean = false;

  constructor(
    private tokenService: Angular2TokenService,
    private ngRedux: NgRedux<IAppState>,
    private actions: NavbarActions,
  ) {
    this.tokenService.init();
  }

  public ngOnInit() {
    this.resetUser();
    $("#signInModalCenter").on("hidden.bs.modal", (e) => {
      this.ngRedux.dispatch(this.actions.unmountModal());
      if (this.confirmFlashMessage) {
        const message: IMessage = {
          messages: [
            "You will receive an email with instructions for how to confirm your email address in a few minutes.",
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
    this.tokenService.registerAccount(this.sanitizedParams()).subscribe(
        (res) => {
          this.confirmFlashMessage = true;
          $("#signInModalCenter").modal("hide");
        },
        (err) => {
          const message: IMessage = {
            messages: err.json().errors.full_messages,
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

  private sanitizedParams(): { username: string, email: string, password: string, passwordConfirmation: string } {
    const params: { username: string, email: string, password: string, passwordConfirmation: string } = {
      email: "",
      password: "",
      passwordConfirmation: "",
      username: "",
    };
    Object.keys(this.user).forEach((key) => {
      if (key !== "backendErr") { params[key] = this.user[key]; }
    });
    return params;
  }

  private resetUser(backendErr: string = null) {
    this.user = {
      backendErr,
      email: "",
      password: "",
      passwordConfirmation: "",
      username: "",
    };
  }
}
