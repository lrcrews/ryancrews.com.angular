import { APP_BASE_HREF } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router, RouterModule } from "@angular/router";

import { HomePageComponent } from "./home-page.component";

describe("HomePageComponent", () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent
      ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
  });

  it("should be created", async(() => {
    expect(component).toBeTruthy();
  }));

  describe("navigateToAbout", () => {

    it("should navigate to the about page", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToAbout();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/about");
    });

  });

  describe("navigateToDisclosure", () => {

    it("should navigate to the disclosure page", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToDisclosure();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/disclosure");
    });

  });

  describe("navigateToNumbersPost", () => {

    it("should call Router's navigateByUrl with the path to the Numbers post", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToNumbersPost();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/the-one-about-numbers");
    });

  });

  describe("navigateToUccPost", () => {

    it("should call Router's navigateByUrl with the path to the UCC post", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToUccPost();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/the-one-about-ucc");
    });

  });

});
