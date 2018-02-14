import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { Angular2TokenService } from "angular2-token";

import { AppComponent } from "./app.component";
import { FlashMessageModule } from "./flashMessage/flashMessage.module";
import { NavbarModule } from "./navbar/navbar.module";
import { StoreModule } from "./store/store.module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FlashMessageModule,
    HttpModule,
    NavbarModule,
    NgReduxModule,
    RouterModule,
    StoreModule,
  ],
  providers: [
    Angular2TokenService,
  ],
})

export class AppModule { }
