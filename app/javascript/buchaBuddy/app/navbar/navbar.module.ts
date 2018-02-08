import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NavbarActions } from "./api/navbar.actions";
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
  providers: [NavbarActions],
})

export class NavbarModule { }
