import { Injectable } from "@angular/core";
import { Action } from "redux";

@Injectable()
export class NavbarActions {
  public static LOGIN = "LOGIN";
  public static SIGNUP = "SIGNUP";
  public static FORGOT_PASSWORD = "FORGOT_PASSWORD";

  public login(): Action {
    return { type: NavbarActions.LOGIN };
  }

  public signUp(): Action {
    return { type: NavbarActions.SIGNUP };
  }

  public forgotPassword(): Action {
    return { type: NavbarActions.FORGOT_PASSWORD };
  }
}
