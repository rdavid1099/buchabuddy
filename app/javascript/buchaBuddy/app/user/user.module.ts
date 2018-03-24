import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "../app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NewBatchFormComponent } from "./newBatchForm/newBatchForm.component";
import { SidebarMenuComponent } from "./sidebarMenu/sidebarMenu.component";
import { UserComponent } from "./user.component";
import { UserViewportComponent } from "./userViewport/userViewport.component";

@NgModule({
  declarations: [
    DashboardComponent,
    NewBatchFormComponent,
    SidebarMenuComponent,
    UserViewportComponent,
    UserComponent,
  ],
  exports: [ ],
  imports: [
    AppRoutingModule,
    CommonModule,
  ],
})

export class UserModule { }
