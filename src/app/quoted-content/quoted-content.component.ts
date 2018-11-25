import { Component, Input } from "@angular/core";

@Component({
  selector: "app-quoted-content",
  styleUrls: [ "./quoted-content.component.scss" ],
  templateUrl: "./quoted-content.component.html"
})

export class QuotedContentComponent {

  @Input() terminalInput = false;

}
