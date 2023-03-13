import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateWebContactUsInput } from 'src/API';
import { Routers } from '../../../core/enums/routers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validationPatterns } from 'src/app/core/utils/validations';
import { AlertPopupModel } from '../../../core/models/alert-popup.model';
import { AlertTypes } from '../../../core/enums/alert-types';
import { submitContactUsForm } from 'src/app/core/services/forms/forms.service';

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.scss'],
})
export class ReplyFormComponent implements OnInit {
  form: FormGroup;

  showSuccessAlert: boolean = false;
  loading: boolean = false;

  successAlert: AlertPopupModel = {
    type: AlertTypes.Success,
    description: 'Your request has been sent. Check your e-mail for updates.',
  };

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      fullName: ['', validationPatterns.fullName],
      email: ['', validationPatterns.email],
      websiteUrl: [''],
      comment: ['', [Validators.required, ...validationPatterns.comment]],
      saveEmail: [false],
    });
  }

  closeAlertPopup() {
    this.showSuccessAlert = false;

    this.router.navigate([Routers.Home]);
  }

  submitForm(replyData: any) {
    this.loading = true;
    let data: CreateWebContactUsInput = replyData;

    submitContactUsForm(data)
      .then((cData: any) => {
        if (cData) {
          this.showSuccessAlert = true;
          this.loading = false;
        }
      })
      .catch((err) => {
        this.loading = false;
        console.log(err.message);
      });
  }
}
