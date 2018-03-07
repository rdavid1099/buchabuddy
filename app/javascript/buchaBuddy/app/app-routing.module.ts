import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TrackingToolsComponent } from "./trackingTools/trackingTools.component";

const routes: Routes = [
  { path: "", redirectTo: "/tools", pathMatch: "full" },
  { path: "tools", component: TrackingToolsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
