import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollProcessComponent } from './payroll-process.component';

describe('PayrollProcessComponent', () => {
  let component: PayrollProcessComponent;
  let fixture: ComponentFixture<PayrollProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
