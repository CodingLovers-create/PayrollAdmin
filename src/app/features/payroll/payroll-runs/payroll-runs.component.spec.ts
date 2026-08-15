import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunsComponent } from './payroll-runs.component';

describe('PayrollRunsComponent', () => {
  let component: PayrollRunsComponent;
  let fixture: ComponentFixture<PayrollRunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollRunsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
