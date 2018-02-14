import { IError } from "../error/ierror.interface";
import { IMessage } from "../flashMessage/api/imessage.interface";
import { IUser } from "../user/iuser.interface";

export interface IAppState {
  modalState: string;
  currentUser: IUser;
  loggedIn: boolean;
  message: IMessage;
}
