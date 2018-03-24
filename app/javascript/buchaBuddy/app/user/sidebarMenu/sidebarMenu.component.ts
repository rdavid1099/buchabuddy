import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

import { IAppState } from "../../store/store.model";
import * as SidebarMenuActions from "./api/sidebarMenu.actions";
import templateString from "./sidebarMenu.component.html";

@Component({
  selector: "sidebar-menu",
  template: templateString,
})

export class SidebarMenuComponent {
  public currentSelection: string = null;

  constructor(
    private ngRedux: NgRedux<IAppState>,
  ) { }

  public menuSelection(selection) {
    this.currentSelection = selection;
    this.ngRedux.dispatch(new SidebarMenuActions.ChangeSelection(selection).dispatch());
  }
}
