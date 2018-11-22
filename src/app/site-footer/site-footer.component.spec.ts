import { APP_BASE_HREF } from "@angular/common";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router, RouterModule } from "@angular/router";

import { SiteFooterComponent } from "./site-footer.component";

describe("SiteFooterComponent", () => {
  let component: SiteFooterComponent;
  let fixture: ComponentFixture<SiteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SiteFooterComponent
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
    fixture = TestBed.createComponent(SiteFooterComponent);
    component = fixture.componentInstance;
  });

  it("should be created", async(() => {
    expect(component).toBeTruthy();
  }));

  describe("navigateToDisclosure", () => {

    it("should navigate to the home page", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToDisclosure();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/disclosure");
    });

  });

});
