import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

import { IAppState } from "../../store/store.model";
import templateString from "./dashboard.component.html";

@Component({
  selector: "dashboard",
  template: templateString,
})

export class DashboardComponent { }
