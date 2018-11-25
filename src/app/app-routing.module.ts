import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutPageComponent } from "./about-page/about-page.component";
import { DisclosurePageComponent } from "./disclosure-page/disclosure-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NumbersPostComponent } from "./posts/numbers/numbers-post.component";
import { UccPostComponent } from "./posts/ucc/ucc-post.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  // Site pages
  { path: "about", component: AboutPageComponent },
  { path: "disclosure", component: DisclosurePageComponent },
  // "The one about..." pages
  { path: "the-one-about-numbers", component: NumbersPostComponent },
  { path: "the-one-about-ucc", component: UccPostComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"}) ]
})

export class RyanCrewsRoutingModule { }
