import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdTileComponent } from "./ad-tile.component";

describe("AdTileComponent", () => {
  let component: AdTileComponent;
  let fixture: ComponentFixture<AdTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdTileComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTileComponent);
    component = fixture.componentInstance;
  });

  it("should be created", async(() => {
    expect(component).toBeTruthy();
  }));

});
