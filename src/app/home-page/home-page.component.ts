import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  styleUrls: [ "./home-page.component.scss" ],
  templateUrl: "./home-page.component.html"
})

export class HomePageComponent {

  constructor(private _router: Router) { }

  navigateToAbout(): void {
    this._navigateToPage("/about");
  }

  navigateToDisclosure(): void {
    this._navigateToPage("/disclosure");
  }

  navigateToNumbersPost(): void {
    this._navigateToPage("/the-one-about-the-math-of-numbers");
  }

  navigateToUccPost(): void {
    this._navigateToPage("/the-one-about-ucc");
  }

  private _navigateToPage(path: string): void {
    this._router.navigateByUrl(path);
  }

}
