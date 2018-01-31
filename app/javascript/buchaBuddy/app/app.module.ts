import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { Angular2TokenService } from "angular2-token";

import { IAppState, INITIAL_STATE, rootReducer } from "../store";
import { AppComponent } from "./app.component";
import { NavbarActions } from "./navbar/navbar.actions";
import { NavbarModule } from "./navbar/navbar.module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    NavbarModule,
    NgReduxModule,
    RouterModule,
  ],
  providers: [
    Angular2TokenService,
    NavbarActions,
  ],
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
    );
  }
}
