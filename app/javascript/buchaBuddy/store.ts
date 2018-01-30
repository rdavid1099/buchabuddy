import { Action } from "redux";
import { NavbarActions } from "./app/navbar/navbar.actions";

export interface IAppState {
  modalState: string;
}

export const INITIAL_STATE: IAppState = {
  modalState: "login",
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {
    case NavbarActions.LOGIN: return { modalState: "login" };
    case NavbarActions.SIGNUP: return { modalState: "signUp" };
    case NavbarActions.FORGOT_PASSWORD: return { modalState: "forgotPassword" };
  }

  return lastState;
}
