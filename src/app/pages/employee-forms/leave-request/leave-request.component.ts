import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { validationPatterns } from 'src/app/core/utils/validations';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss'],
})
export class LeaveRequestComponent implements OnInit {
  leaveRequestForm: FormGroup;

  public leaveRequest(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_o386b9s', // SERVICE ID
        'template_32vgsch', // TEMPLATE ID
        e.target as HTMLFormElement,
        'P2MdntW892sBfMj64'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (this.leaveRequestForm.valid) {
      this.leaveRequestForm.reset();
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.leaveRequestForm = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      date: ['', validationPatterns.date],
      employeeName: ['', validationPatterns.employeeName],
      employeeId: ['', validationPatterns.employeeId],
      department: ['', validationPatterns.department],
      designation: ['', validationPatterns.designation],
      employmentStatus: ['', validationPatterns.employmentStatus],
      startDate: ['', validationPatterns.startDate],
      endDate: ['', validationPatterns.endDate],
      totalDays: ['', validationPatterns.totalDays],
      resumingDate: ['', validationPatterns.resumingDate],
      remarks: ['', validationPatterns.remarks],
      employeesSignature: ['', validationPatterns.employeesSignature],
      immediateHeadsApproval: ['', validationPatterns.immediateHeadsApproval],
      signature: ['', validationPatterns.signature],
      comments: ['', validationPatterns.comments],
    });
  }
}
