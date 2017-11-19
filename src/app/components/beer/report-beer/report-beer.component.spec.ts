import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBeerComponent } from './report-beer.component';

describe('ReportBeerComponent', () => {
  let component: ReportBeerComponent;
  let fixture: ComponentFixture<ReportBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
