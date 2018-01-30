import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { IAppState, INITIAL_STATE, rootReducer } from "../store";
import { AppComponent } from "./app.component";
import { NavbarActions } from "./navbar/navbar.actions";
import { NavbarModule } from "./navbar/navbar.module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NavbarModule,
    NgReduxModule,
  ],
  providers: [NavbarActions],
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
    );
  }
}
