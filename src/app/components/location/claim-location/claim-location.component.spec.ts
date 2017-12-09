import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimLocationComponent } from './claim-location.component';

describe('ClaimLocationComponent', () => {
  let component: ClaimLocationComponent;
  let fixture: ComponentFixture<ClaimLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
