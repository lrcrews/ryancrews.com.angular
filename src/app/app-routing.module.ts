import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutPageComponent } from "./about-page/about-page.component";
import { DisclosurePageComponent } from "./disclosure-page/disclosure-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { UccPostComponent } from "./posts/ucc/ucc-post.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  // Site pages
  { path: "about", component: AboutPageComponent },
  { path: "disclosure", component: DisclosurePageComponent },
  // Psot pages
  { path: "umbrella-clad-cocktails-is-not-what-ucc-stands-for", component: UccPostComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"}) ]
})

export class RyanCrewsRoutingModule { }
