import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import { PopularCardComponent } from './popular-card/popular-card.component';
import { StaffCardComponent } from './staff-card/staff-card.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { ReplyFormComponent } from './reply-form/reply-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { CollapseCardComponent } from './collapse-card/collapse-card.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PositionCardComponent } from './position-card/position-card.component';
import { BenefitsCardComponent } from './benefits-card/benefits-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import { ButtonComponent } from './button/button.component';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeFormsComponent } from '../../pages/employee-forms/employee-forms.component';
import { CashAdvanceComponent } from 'src/app/pages/employee-forms/cash-advance/cash-advance.component';
import { CashLoanComponent } from 'src/app/pages/employee-forms/cash-loan/cash-loan.component';
import { LeaveRequestComponent } from 'src/app/pages/employee-forms/leave-request/leave-request.component';
import { LoanPaymentExtensionComponent } from 'src/app/pages/employee-forms/loan-payment-extension/loan-payment-extension.component';
import { OvertimeComponent } from 'src/app/pages/employee-forms/overtime/overtime.component';
import { UndertimeComponent } from 'src/app/pages/employee-forms/undertime/undertime.component';

@NgModule({
  declarations: [
    ArticleCardComponent,
    PopularCardComponent,
    StaffCardComponent,
    CommentCardComponent,
    ReplyFormComponent,
    CollapseCardComponent,
    ListItemComponent,
    BenefitsCardComponent,
    PositionCardComponent,
    PaginatorComponent,
    AlertPopupComponent,
    ButtonComponent,
    EmployeeFormsComponent,
    CashAdvanceComponent,
    CashLoanComponent,
    LeaveRequestComponent,
    LoanPaymentExtensionComponent,
    OvertimeComponent,
    UndertimeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    ArticleCardComponent,
    PopularCardComponent,
    StaffCardComponent,
    CommentCardComponent,
    ReplyFormComponent,
    CollapseCardComponent,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,
    ListItemComponent,
    BenefitsCardComponent,
    PositionCardComponent,
    PaginatorComponent,
    AlertPopupComponent,
    ButtonComponent,
  ],
})
export class SharedComponentsModule {}
