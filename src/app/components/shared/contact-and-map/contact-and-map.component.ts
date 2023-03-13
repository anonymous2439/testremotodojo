import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { validationPatterns } from '../../../core/utils/validations';
import { AlertPopupModel } from 'src/app/core/models/alert-popup.model';
import { AlertTypes } from 'src/app/core/enums/alert-types';

@Component({
  selector: 'app-contact-and-map',
  templateUrl: './contact-and-map.component.html',
  styleUrls: ['./contact-and-map.component.scss'],
})
export class ContactAndMapComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  showSuccessAlert: boolean = false;

  successAlert: AlertPopupModel = {
    type: AlertTypes.Success,
    description: `Our team will contact you shortly. Check your e-mail for updates.`,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      name: ['', validationPatterns.name],
      email: ['', validationPatterns.email],
      message: ['', validationPatterns.message],
    });
  }

  submitForm() {
    this.loading = true;
    this.showSuccessAlert = true;
  }

  closeAlertPopup() {
    this.showSuccessAlert = false;
  }
}
