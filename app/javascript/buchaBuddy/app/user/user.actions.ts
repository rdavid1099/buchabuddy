import { Injectable } from "@angular/core";
import { Action } from "redux";

@Injectable()
export class UserActions {
  public static LOGIN = "LOGIN";
  public static LOGOUT = "LOGOUT";

  public login(): Action {
    return { type: UserActions.LOGIN };
  }

  public logout(): Action {
    return { type: UserActions.LOGOUT };
  }
}
