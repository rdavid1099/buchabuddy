/* tslint:disable: max-classes-per-file */

import { Action } from "redux";

export enum SidebarMenuActionTypes {
  ChangeSelection = "[SidebarMenu] ChangeSelection",
}

export class ChangeSelection implements Action {
  public readonly type: string = SidebarMenuActionTypes.ChangeSelection;
  constructor(public payload: string) { }

  public dispatch() {
    return {
      payload: this.payload,
      type: this.type,
    };
  }
}

export type SidebarMenuActions =
  | ChangeSelection;
