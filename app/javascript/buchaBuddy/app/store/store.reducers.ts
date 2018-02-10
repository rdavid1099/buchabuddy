import { Action } from "redux";

import { IAppState } from "./store.model";

import { FlashMessageActions, FlashMessageActionTypes } from "../flashMessage/api/flashMessage.actions";
import { NavbarActions } from "../navbar/api/navbar.actions";
import { UserActions, UserActionTypes } from "../user/user.actions";

export const INITIAL_STATE: IAppState = {
  currentUser: null,
  loggedIn: false,
  message: null,
  modalState: "login",
};

type Actions =
  | UserActions
  | FlashMessageActions;

export function rootReducer(lastState: IAppState = INITIAL_STATE, action): IAppState {
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
    case UserActionTypes.Logout: return {
      ...lastState,
      currentUser: null,
      loggedIn: false,
    };
    case FlashMessageActionTypes.Load: return {
      ...lastState,
      message: action.payload,
    };
  }
  return lastState;
}
