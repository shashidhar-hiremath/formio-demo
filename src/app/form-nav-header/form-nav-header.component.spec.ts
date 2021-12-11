import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNavHeaderComponent } from './form-nav-header.component';

describe('FormNavHeaderComponent', () => {
  let component: FormNavHeaderComponent;
  let fixture: ComponentFixture<FormNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
