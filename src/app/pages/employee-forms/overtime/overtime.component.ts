import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { validationPatterns } from 'src/app/core/utils/validations';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-overtime',
  templateUrl: './overtime.component.html',
  styleUrls: ['./overtime.component.scss'],
})
export class OvertimeComponent implements OnInit {
  overtimeForm: FormGroup;

  public overtime(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_1wkf5sq', // SERVICE ID
        'template_citz8d2', // TEMPLATE ID
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

    if (this.overtimeForm.valid) {
      this.overtimeForm.reset();
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.overtimeForm = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      employeeName: ['', validationPatterns.employeeName],
      employeeId: ['', validationPatterns.employeeId],
      department: ['', validationPatterns.department],
      employmentStatus: ['', validationPatterns.employmentStatus],
      designation: ['', validationPatterns.designation],
      reason: ['', validationPatterns.reason],
      dateOfOvertime: ['', validationPatterns.dateOfOvertime],
      in: ['', validationPatterns.in],
      out: ['', validationPatterns.out],
      nameOfReliever: ['', validationPatterns.nameOfReliever],
      remarks: ['', validationPatterns.remarks],
      requestedBy: ['', validationPatterns.requestedBy],
      approvedBy: ['', validationPatterns.approvedBy],
      receivedBy: ['', validationPatterns.receivedBy],
    });
  }
}
