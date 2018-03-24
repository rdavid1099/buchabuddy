import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { enableProdMode } from "@angular/core";
import { Angular2TokenService } from "angular2-token";

import { CONSTANTS } from "../../packs/constants";
import templateString from "./app.component.html";
import { IAppState } from "./store/store.model";
import { IUser } from "./user/iuser.interface";
import * as UserActions from "./user/user.actions";

if (CONSTANTS.ENV === "production") { enableProdMode(); }

@Component({
  selector: "buchabuddy",
  template: templateString,
})

export class AppComponent implements OnInit {
  public appLoaded: boolean = false;
  public modalState: string = null;

  constructor(
    private tokenService: Angular2TokenService,
    private ngRedux: NgRedux<IAppState>,
  ) {
    this.tokenService.init();
    ngRedux.select<string>("modalState")
      .subscribe((newModalState) => this.modalState = newModalState);
  }

  public ngOnInit() {
    if (this.tokenService.userSignedIn()) {
      this.tokenService.validateToken().subscribe(
        (res) => {
          const data: any = this.tokenService.currentUserData;
          const loggedInUser: IUser = {
            email: data.email,
            id: data.id,
            username: data.username,
          };
          this.ngRedux.dispatch(new UserActions.Login(loggedInUser).dispatch());
          this.appLoaded = true;
        },
        (err) => {
          this.appLoaded = true;
        },
      );
    } else {
      this.appLoaded = true;
    }
  }
}
