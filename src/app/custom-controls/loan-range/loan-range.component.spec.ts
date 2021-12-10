import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRangeComponent } from './loan-range.component';

describe('LoanRangeComponent', () => {
  let component: LoanRangeComponent;
  let fixture: ComponentFixture<LoanRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
