/* tslint:disable: max-classes-per-file */

import { Action } from "redux";

import { IUser } from "./iuser.interface";

export enum UserActionTypes {
  Login = "[User] Login",
  Logout = "[User] Logout",
}

export class Login implements Action {
  public readonly type: string = UserActionTypes.Login;
  constructor(public payload: IUser) { }

  public dispatch() {
    return {
      payload: this.payload,
      type: this.type,
    };
  }
}

export class Logout implements Action {
  public readonly type: string = UserActionTypes.Logout;
  constructor(public payload?: IUser) { }

  public dispatch() {
    return { type: this.type };
  }
}

export type Actions =
  | Login
  | Logout;
