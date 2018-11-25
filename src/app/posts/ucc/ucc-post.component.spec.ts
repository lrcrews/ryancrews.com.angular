import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UccPostComponent } from "./ucc-post.component";

describe("UccPostComponent", () => {
  let component: UccPostComponent;
  let fixture: ComponentFixture<UccPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UccPostComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UccPostComponent);
    component = fixture.componentInstance;
  });

  it("should be created", async(() => {
    expect(component).toBeTruthy();
  }));

});
