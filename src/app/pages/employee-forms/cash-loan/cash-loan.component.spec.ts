import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashLoanComponent } from './cash-loan.component';

describe('CashLoanComponent', () => {
  let component: CashLoanComponent;
  let fixture: ComponentFixture<CashLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
