import { NgRedux } from "@angular-redux/store";
import { Component } from "@angular/core";

import { IAppState } from "../store/store.model";
import * as FlashMessageActions from "./api/flashMessage.actions";
import { IMessage } from "./api/imessage.interface";
import templateString from "./flashMessage.component.html";

@Component({
  selector: "flash-message",
  template: templateString,
})

export class FlashMessageComponent {
  public flashMessage: IMessage = null;

  constructor(
    private ngRedux: NgRedux<IAppState>,
  ) {
    ngRedux.select<IMessage>("message")
      .subscribe((newMessageState) => this.flashMessage = newMessageState);
  }

  public unmountFlashMessage() {
    this.ngRedux.dispatch(new FlashMessageActions.Unmount().dispatch());
  }
}
