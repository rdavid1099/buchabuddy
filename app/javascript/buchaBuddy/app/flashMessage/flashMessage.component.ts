import { NgRedux } from "@angular-redux/store";
import { Component } from "@angular/core";

import { IAppState } from "../store/store.model";
import { IMessage } from "./api/imessage.interface";
// import * as MessageActions from "./api/message.actions"
import templateString from "./flashMessage.component.html";

@Component({
  selector: "flash-message",
  template: templateString,
})

export class FlashMessageComponent { }
