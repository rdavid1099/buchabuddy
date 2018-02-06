import { Injectable } from "@angular/core";
import { Action } from "redux";

@Injectable()
export class ErrorActions {
  public static DISPLAY = "DISPLAY";

  public display(): Action {
    return { type: ErrorActions.DISPLAY };
  }
}
