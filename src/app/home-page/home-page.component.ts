import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  styleUrls: [ "./home-page.component.scss" ],
  templateUrl: "./home-page.component.html"
})

export class HomePageComponent {

  constructor(private _router: Router) { }

  navigateToUccPost(): void {
    this._navigateToPage("/umbrella-clad-cocktails-is-not-what-ucc-stands-for");
  }

  private _navigateToPage(path: string): void {
    this._router.navigateByUrl(path);
  }

}
