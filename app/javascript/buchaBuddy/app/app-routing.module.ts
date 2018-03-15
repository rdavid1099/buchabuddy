import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BrewToolsComponent } from "./brewTools/brewTools.component";
import { DonateComponent } from "./donate/donate.component";
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";
import { RootComponent } from "./root/root.component";

const routes: Routes = [
  { path: "", component: RootComponent },
  { path: "tools", component: BrewToolsComponent },
  { path: "donate", component: DonateComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
