import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPaymentExtensionComponent } from './loan-payment-extension.component';

describe('LoanPaymentExtensionComponent', () => {
  let component: LoanPaymentExtensionComponent;
  let fixture: ComponentFixture<LoanPaymentExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanPaymentExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPaymentExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
