import { APP_BASE_HREF } from "@angular/common";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router, RouterModule } from "@angular/router";

import { SiteHeaderComponent } from "./site-header.component";

describe("SiteHeaderComponent", () => {
  let component: SiteHeaderComponent;
  let fixture: ComponentFixture<SiteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SiteHeaderComponent
      ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHeaderComponent);
    component = fixture.componentInstance;
  });

  it("should be created", async(() => {
    expect(component).toBeTruthy();
  }));

  describe("navigateToHomePage", () => {

    it("should navigate to the home page", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToHomePage();
      expect(router.navigateByUrl).toHaveBeenCalledWith("");
    });

  });

});
