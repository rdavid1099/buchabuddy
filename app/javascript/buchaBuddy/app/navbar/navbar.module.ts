import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SignInModalModule } from "./modals/signInModal.module";
import { NavbarComponent } from "./navbar.component";

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    SignInModalModule,
  ],
})

export class NavbarModule { }
