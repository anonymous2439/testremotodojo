import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { validationPatterns } from 'src/app/core/utils/validations';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-undertime',
  templateUrl: './undertime.component.html',
  styleUrls: ['./undertime.component.scss'],
})
export class UndertimeComponent implements OnInit {
  undertimeForm: FormGroup;

  public undertime(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_0l62u9o', // SERVICE ID
        'template_9tkygw1', // TEMPLATE ID
        e.target as HTMLFormElement,
        '3fze6HNkf07MiOKYe' // PUBLIC KEY
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (this.undertimeForm.valid) {
      this.undertimeForm.reset();
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.undertimeForm = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      employeeName: ['', validationPatterns.employeeName],
      employeeId: ['', validationPatterns.employeeId],
      department: ['', validationPatterns.department],
      employmentStatus: ['', validationPatterns.employmentStatus],
      designation: ['', validationPatterns.designation],
      dateOfUndertime: ['', validationPatterns.dateOfUndertime],
      in: ['', validationPatterns.in],
      out: ['', validationPatterns.out],
      nameOfReliever: ['', validationPatterns.nameOfReliever],
      reason: ['', validationPatterns.reason],
      remarks: ['', validationPatterns.remarks],
      requestedBy: ['', validationPatterns.requestedBy],
      approvedBy: ['', validationPatterns.approvedBy],
      receivedBy: ['', validationPatterns.receivedBy],
    });
  }
}
