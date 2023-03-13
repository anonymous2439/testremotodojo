import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { validationPatterns } from 'src/app/core/utils/validations';
import { Routers } from 'src/app/core/enums/routers';
import { AlertPopupModel } from 'src/app/core/models/alert-popup.model';
import { AlertTypes } from 'src/app/core/enums/alert-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash-advance',
  templateUrl: './cash-advance.component.html',
  styleUrls: ['./cash-advance.component.scss'],
})
export class CashAdvanceComponent implements OnInit {
  cashAdvanceForm: FormGroup;
  loading: boolean = false;
  showSuccessAlert: boolean = false;

  successAlert: AlertPopupModel = {
    type: AlertTypes.Success,
    description: 'Your request has been sent. Check your e-mail for updates',
  };

  public cashAdvance(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_2jm64rj', // SERVICE ID
        'template_4yc6246', // TEMPLATE ID
        e.target as HTMLFormElement,
        'FWoV_tur1C9VxYPbh' // PUBLIC KEY
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (this.cashAdvanceForm.valid) {
      this.cashAdvanceForm.reset();
    }
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.cashAdvanceForm = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      name: ['', validationPatterns.name],
      date: ['', validationPatterns.date],
      amount: ['', validationPatterns.amount],
      department: ['', validationPatterns.department],
      reason: ['', validationPatterns.reason],
      dateOfCashAdvanceNeeded: ['', validationPatterns.dateOfCashAdvanceNeeded],
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

  submitForm() {
    this.loading = true;
    this.showSuccessAlert = true;
  }

  closeAlertPopup() {
    this.showSuccessAlert = false;
    this.router.navigate([Routers.Home]);
  }
}
