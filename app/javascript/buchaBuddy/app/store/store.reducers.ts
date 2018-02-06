import { Action } from "redux";

import { IAppState } from "./store.model";

import { NavbarActions } from "../navbar/api/navbar.actions";
import { UserActions } from "../user/user.actions";

export const INITIAL_STATE: IAppState = {
  currentUser: null,
  loggedIn: false,
  modalState: "login",
};

export function rootReducer(lastState: IAppState = INITIAL_STATE, action: Action): IAppState {
  switch (action.type) {
    case NavbarActions.LOGIN: return {
      ...lastState,
      modalState: "login",
    };
    case NavbarActions.SIGNUP: return {
      ...lastState,
      modalState: "signUp",
    };
    case NavbarActions.FORGOT_PASSWORD: return {
      ...lastState,
      modalState: "forgotPassword",
    };
    case NavbarActions.RESEND_CONFIRMATION: return {
      ...lastState,
      modalState: "resendConfirmation",
    };
    case UserActions.SIGNIN: return {
      ...lastState,
      loggedIn: true,
    };
  }
  return lastState;
}
