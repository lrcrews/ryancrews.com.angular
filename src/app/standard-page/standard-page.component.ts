import { Component } from "@angular/core";

@Component({
  selector: "app-standard-page",
  styleUrls: [ "./standard-page.component.scss" ],
  templateUrl: "./standard-page.component.html"
})

/* The majoirty of the pages on this site follow the same
 * layout/styling as eachother, and therefore can use this
 * component (and the ng-content tag it contains) to avoid
 * repeative HTML/CSS.
 */

export class StandardPageComponent {

}
