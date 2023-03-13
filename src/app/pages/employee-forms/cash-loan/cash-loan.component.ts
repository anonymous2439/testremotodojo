import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { validationPatterns } from 'src/app/core/utils/validations';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ConsoleLogger } from '@aws-amplify/core';

@Component({
  selector: 'app-cash-loan',
  templateUrl: './cash-loan.component.html',
  styleUrls: ['./cash-loan.component.scss'],
})
export class CashLoanComponent implements OnInit {
  cashLoanForm: FormGroup;

  public cashLoan(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jy5v6dw', // SERVICE ID
        'template_c0kvrq4', // TEMPLATE ID
        e.target as HTMLFormElement,
        'FWoV_tur1C9VxYPbh'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (this.cashLoanForm.valid) {
      this.cashLoanForm.reset();
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cashLoanForm = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      name: ['', validationPatterns.name],
      date: ['', validationPatterns.date],
      amount: ['', validationPatterns.amount],
      department: ['', validationPatterns.department],
      reason: ['', validationPatterns.reason],
      paymentTerms: ['', validationPatterns.paymentTerms],
      dateOfCashLoanNeeded: ['', validationPatterns.dateOfCashLoanNeeded],
      amountOfPayrollDeduction: [
        '',
        validationPatterns.amountOfPayrollDeduction,
      ],
      doYouHaveAnExistingBalance: [
        '',
        validationPatterns.doYouHaveAnExistingBalance,
      ],
      loanBalance: ['', validationPatterns.loanBalance],
      borrowersSignature: ['', validationPatterns.borrowersSignature],
      releasedBy: ['', validationPatterns.releasedBy],
    });
  }
}
