import { Action } from "redux";

import { IAppState } from "./store.model";

import { ErrorActions } from "../error/error.actions";
import { NavbarActions } from "../navbar/api/navbar.actions";
import { Actions, UserActionTypes } from "../user/user.actions";

export const INITIAL_STATE: IAppState = {
  currentUser: null,
  error: null,
  loggedIn: false,
  modalState: "login",
};

export function rootReducer(lastState: IAppState = INITIAL_STATE, action: Actions): IAppState {
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
    case UserActionTypes.Login: return {
      ...lastState,
      currentUser: action.payload,
      loggedIn: true,
    };
    // case ErrorActions.DISPLAY: return {
    //   ...lastState,
    //   error: null,
    // };
  }
  return lastState;
}
