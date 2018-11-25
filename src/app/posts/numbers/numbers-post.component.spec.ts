import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NumbersPostComponent } from "./numbers-post.component";

describe("NumbersPostComponent", () => {
  let component: NumbersPostComponent;
  let fixture: ComponentFixture<NumbersPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NumbersPostComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersPostComponent);
    component = fixture.componentInstance;
  });

  it("should be created", async(() => {
    expect(component).toBeTruthy();
  }));

});
