import { Injectable } from "@angular/core";
import { Action } from "redux";

@Injectable()
export class NavbarActions {
  public static LOGIN = "LOGIN";
  public static SIGNUP = "SIGNUP";

  public login(): Action {
    return { type: NavbarActions.LOGIN };
  }

  public signUp(): Action {
    return { type: NavbarActions.SIGNUP };
  }
}
