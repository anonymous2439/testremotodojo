import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { validationPatterns } from 'src/app/core/utils/validations';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-loan-payment-extension',
  templateUrl: './loan-payment-extension.component.html',
  styleUrls: ['./loan-payment-extension.component.scss'],
})
export class LoanPaymentExtensionComponent implements OnInit {
  loanPaymentExtensionForm: FormGroup;

  public loanPaymentExtension(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_2jm64rj', // SERVICE ID
        'template_nk6u6ob', // TEMPLATE ID
        e.target as HTMLFormElement,
        'P2MdntW892sBfMj64' // PUBLIC KEY
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (this.loanPaymentExtensionForm.valid) {
      this.loanPaymentExtensionForm.reset();
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loanPaymentExtensionForm = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      name: ['', validationPatterns.name],
      date: ['', validationPatterns.date],
      loanAmount: ['', validationPatterns.loanAmount],
      extensionDate: ['', validationPatterns.extensionDate],
      reason: ['', validationPatterns.reason],
      loanBalance: ['', validationPatterns.loanBalance],
      amountOfPayrollDeduction: [
        '',
        validationPatterns.amountOfPayrollDeduction,
      ],
      borrowersSignature: ['', validationPatterns.borrowersSignature],
    });
  }
}
