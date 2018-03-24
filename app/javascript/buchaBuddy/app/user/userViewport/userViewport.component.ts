import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

import { IAppState } from "../../store/store.model";
import templateString from "./userViewport.component.html";

@Component({
  selector: "user-viewport",
  template: templateString,
})

export class UserViewportComponent {
  public currentSelection: string = null;
  constructor(
    private ngRedux: NgRedux<IAppState>,
  ) {
    ngRedux.select<string>("sidebarMenuSelected")
      .subscribe((newCurrentSelectionState) => this.currentSelection = newCurrentSelectionState);
  }
}
