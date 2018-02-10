/* tslint:disable: max-classes-per-file */

import { Action } from "redux";

import { IMessage } from "./imessage.interface";

export enum FlashMessageActionTypes {
  Load = "[Message] Load",
  Unload = "[Message] Unload",
}

export class Load implements Action {
  public readonly type: string = FlashMessageActionTypes.Load;
  constructor(public payload: IMessage) { }

  public dispatch() {
    return {
      payload: this.payload,
      type: this.type,
    };
  }
}

export class Unload implements Action {
  public readonly type: string = FlashMessageActionTypes.Unload;
  constructor(public payload?: IMessage) { }

  public dispatch() {
    return {
      payload: null,
      type: this.type,
    };
  }
}

export type FlashMessageActions =
  | Load
  | Unload;
