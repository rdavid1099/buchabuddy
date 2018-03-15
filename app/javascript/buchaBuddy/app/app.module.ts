import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { Angular2TokenService } from "angular2-token";

import { AppRoutingModule } from "./app-routing.module";
import { FlashMessageModule } from "./flashMessage/flashMessage.module";
import { NavbarModule } from "./navbar/navbar.module";
import { StoreModule } from "./store/store.module";
import { UserModule } from "./user/user.module";

import { AppComponent } from "./app.component";
import { BrewToolsComponent } from "./brewTools/brewTools.component";
import { DonateComponent } from "./donate/donate.component";
import { FooterComponent } from "./footer/footer.component";
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";
import { RootComponent } from "./root/root.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    BrewToolsComponent,
    DonateComponent,
    FooterComponent,
    PageNotFoundComponent,
    RootComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FlashMessageModule,
    HttpModule,
    NavbarModule,
    NgReduxModule,
    StoreModule,
    UserModule,
  ],
  providers: [
    Angular2TokenService,
  ],
})

export class AppModule { }
