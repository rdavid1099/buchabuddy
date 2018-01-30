import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SignInModalComponent } from "./signInModal.component";

@NgModule({
  declarations: [
    SignInModalComponent,
  ],
  exports: [
    SignInModalComponent,
  ],
  imports: [
    CommonModule,
  ],
})

export class SignInModalModule { }
