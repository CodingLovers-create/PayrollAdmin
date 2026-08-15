import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollExceptionsComponent } from './payroll-exceptions.component';

describe('PayrollExceptionsComponent', () => {
  let component: PayrollExceptionsComponent;
  let fixture: ComponentFixture<PayrollExceptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollExceptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollExceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
