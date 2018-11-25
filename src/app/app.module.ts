import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RyanCrewsRoutingModule } from "./app-routing.module";

import { AdTileComponent } from "./ad-tile/ad-tile.component";
import { AppComponent } from "./app-component/app.component";
import { QuotedContentComponent } from "./quoted-content/quoted-content.component";
import { SiteFooterComponent } from "./site-footer/site-footer.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { StandardPageComponent } from "./standard-page/standard-page.component";

// Pages / Posts
import { AboutPageComponent } from "./about-page/about-page.component";
import { DisclosurePageComponent } from "./disclosure-page/disclosure-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NumbersPostComponent } from "./posts/numbers/numbers-post.component";
import { UccPostComponent } from "./posts/ucc/ucc-post.component";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AdTileComponent,
    AppComponent,
    QuotedContentComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    StandardPageComponent,
    // Pages / Posts
    AboutPageComponent,
    DisclosurePageComponent,
    HomePageComponent,
    NumbersPostComponent,
    UccPostComponent
  ],
  imports: [
    BrowserModule,
    RyanCrewsRoutingModule
  ],
  providers: [],
})

export class AppModule { }
