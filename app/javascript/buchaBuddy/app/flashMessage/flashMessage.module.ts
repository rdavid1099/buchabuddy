import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FlashMessageComponent } from "./flashMessage.component";

@NgModule({
  declarations: [
    FlashMessageComponent,
  ],
  exports: [
    FlashMessageComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    FlashMessageComponent,
  ],
})

export class FlashMessageModule { }
