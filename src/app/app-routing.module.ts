import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutPageComponent } from "./about-page/about-page.component";
import { DisclosurePageComponent } from "./disclosure-page/disclosure-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "disclosure", component: DisclosurePageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"}) ]
})

export class RyanCrewsRoutingModule { }
