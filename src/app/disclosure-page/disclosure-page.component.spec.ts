import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DisclosurePageComponent } from "./disclosure-page.component";

describe("DisclosurePageComponent", () => {
  let component: DisclosurePageComponent;
  let fixture: ComponentFixture<DisclosurePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DisclosurePageComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclosurePageComponent);
    component = fixture.componentInstance;
  });

  it("should be created", async(() => {
    expect(component).toBeTruthy();
  }));

});
