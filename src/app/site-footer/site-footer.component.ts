import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-site-footer",
  styleUrls: [ "./site-footer.component.scss" ],
  templateUrl: "./site-footer.component.html"
})

export class SiteFooterComponent {
  currentYear = (new Date()).getFullYear();

  constructor(private _router: Router) {}

  navigateToAbout(): void {
    this._router.navigateByUrl("/about");
  }

  navigateToDisclosure(): void {
    this._router.navigateByUrl("/disclosure");
  }

}
