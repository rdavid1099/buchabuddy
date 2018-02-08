import { Injectable } from "@angular/core";
import { Action } from "redux";

import { IError } from "./ierror.interface";

@Injectable()
export class ErrorActions {
  public static DISPLAY = "DISPLAY";

  public display(payload): Action {
    return { type: ErrorActions.DISPLAY };
  }
}
