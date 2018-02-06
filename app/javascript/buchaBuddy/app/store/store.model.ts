import { IError } from "../error/ierror.interface";
import { IUser } from "../user/iuser.interface";

export interface IAppState {
  modalState: string;
  currentUser: IUser;
  loggedIn: boolean;
  error: IError;
}
