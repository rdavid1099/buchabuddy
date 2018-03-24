import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

import { IAppState } from "../store/store.model";
import { IUser } from "./iuser.interface";
import * as UserActions from "./user.actions";
import templateString from "./user.component.html";

@Component({
  selector: "user",
  template: templateString,
})

export class UserComponent { }
