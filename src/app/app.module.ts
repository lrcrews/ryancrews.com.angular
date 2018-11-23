import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RyanCrewsRoutingModule } from "./app-routing.module";

import { AboutPageComponent } from "./about-page/about-page.component";
import { AdTileComponent } from "./ad-tile/ad-tile.component";
import { AppComponent } from "./app-component/app.component";
import { DisclosurePageComponent } from "./disclosure-page/disclosure-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { QuotedContentComponent } from "./quoted-content/quoted-content.component";
import { SiteFooterComponent } from "./site-footer/site-footer.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AboutPageComponent,
    AdTileComponent,
    AppComponent,
    DisclosurePageComponent,
    HomePageComponent,
    QuotedContentComponent,
    SiteFooterComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    RyanCrewsRoutingModule
  ],
  providers: [],
})

export class AppModule { }
