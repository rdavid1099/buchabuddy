import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DonateComponent } from "./donate/donate.component";
import { TrackingToolsComponent } from "./trackingTools/trackingTools.component";

const routes: Routes = [
  { path: "", redirectTo: "/tools", pathMatch: "full" },
  { path: "tools", component: TrackingToolsComponent },
  { path: "donate", component: DonateComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
