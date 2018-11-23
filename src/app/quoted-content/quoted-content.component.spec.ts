import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuotedContentComponent } from "./quoted-content.component";

describe("QuotedContentComponent", () => {
  let component: QuotedContentComponent;
  let fixture: ComponentFixture<QuotedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuotedContentComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedContentComponent);
    component = fixture.componentInstance;
  });

  it("should be created", async(() => {
    expect(component).toBeTruthy();
  }));

});
