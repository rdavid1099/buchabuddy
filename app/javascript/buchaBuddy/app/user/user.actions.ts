import { Injectable } from "@angular/core";
import { Action } from "redux";

@Injectable()
export class UserActions {
  public static SIGNIN = "SIGNIN";
  public static LOGOUT = "LOGOUT";

  public signIn(): Action {
    return { type: UserActions.SIGNIN };
  }

  public logout(): Action {
    return { type: UserActions.LOGOUT };
  }
}
