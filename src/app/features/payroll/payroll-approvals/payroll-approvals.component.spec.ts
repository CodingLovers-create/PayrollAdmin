import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollApprovalsComponent } from './payroll-approvals.component';

describe('PayrollApprovalsComponent', () => {
  let component: PayrollApprovalsComponent;
  let fixture: ComponentFixture<PayrollApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollApprovalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
