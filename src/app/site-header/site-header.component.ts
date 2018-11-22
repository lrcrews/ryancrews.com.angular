import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-site-header",
  styleUrls: [ "./site-header.component.scss" ],
  templateUrl: "./site-header.component.html"
})

export class SiteHeaderComponent {

  constructor(private _router: Router) {}

  navigateToHomePage(): void {
    this._router.navigateByUrl("");
  }

}
