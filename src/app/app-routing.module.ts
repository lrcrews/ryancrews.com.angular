import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DisclosurePageComponent } from "./disclosure-page/disclosure-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "disclosure", component: DisclosurePageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class RyanCrewsRoutingModule { }
