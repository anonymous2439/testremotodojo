import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';

import { EmployeeFormsRoutingModule } from './employee-forms-routing.module';
import { EmployeeFormsComponent } from './employee-forms.component';
import { CashAdvanceComponent } from './cash-advance/cash-advance.component';
import { CashLoanComponent } from './cash-loan/cash-loan.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LoanPaymentExtensionComponent } from './loan-payment-extension/loan-payment-extension.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { UndertimeComponent } from './undertime/undertime.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ApprovedComponent } from './approved/approved.component';
import { DeclinedComponent } from './declined/declined.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';

@NgModule({
  declarations: [
    EmployeeFormsComponent,
    CashAdvanceComponent,
    CashLoanComponent,
    LeaveRequestComponent,
    LoanPaymentExtensionComponent,
    OvertimeComponent,
    UndertimeComponent,
    ThankYouComponent,
    ApprovedComponent,
    DeclinedComponent,
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
  ],
  imports: [MatTabsModule, CommonModule, EmployeeFormsRoutingModule],
  exports: [],
})
export class EmployeeFormsModule {}
