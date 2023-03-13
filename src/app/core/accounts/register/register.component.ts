import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateRequestAccessInput } from 'src/API';
import { AlertTypes } from '../../enums/alert-types';
import { Countries } from '../../enums/defaultData/countries';
import { Pages } from '../../enums/pages';
import { Routers } from '../../enums/routers';
import { siteKey } from '../../enums/site-key';
import { AlertPopupModel } from '../../models/alert-popup.model';
import { submitRequestAccessForm } from '../../services/forms/forms.service';
import { NavbarService } from '../../services/navbar/navbar.service';
import { validationPatterns } from '../../utils/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  routers = Routers

  successAlert: AlertPopupModel = {
    type: AlertTypes.Success,
    description: 'Your request has been sent. Check your e-mail for updates.'
  }

  showSuccessAlert: boolean = false;
  loading: boolean = false;

  registerForm: FormGroup
  hidePassword: boolean = true;
  hideConfirmPass: boolean = true;
  errors: string[] = [];

  siteKey = siteKey
  countriesData!: any

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.buildForm()
    this.navbarService.getCurrentPage(Pages.Login)
    this.countriesData = Countries
  }

  buildForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', validationPatterns.firstName],
      lastName: ['', validationPatterns.lastName],
      countryCode: ['+63', validationPatterns.countryCode],
      contactNo: ['', validationPatterns.contactNo],
      email: ['', validationPatterns.email],
      companyName: ['', validationPatterns.companyName],
      iPolicy: [false, validationPatterns.iPolicy],
      iNews: [true],
      recaptcha: ['', validationPatterns.recaptcha]
    })
  }

  register(regForm: any) {
    this.loading = true
    let data: CreateRequestAccessInput = regForm
    data.phone = regForm.countryCode + regForm.contactNo;

    this.unwantedData(data);

    submitRequestAccessForm(data).then((accessData) => {
      if (accessData) {
        this.showSuccessAlert = true;
        this.loading = false
      }
    }).catch((err) => {
      this.loading = false
      console.log(err)
    })
  }

  unwantedData(data: any) {
    delete data.recaptcha
    delete data.countryCode
    delete data.contactNo
  }

  closeAlertPopup() {
    this.showSuccessAlert = false
    
    this.router.navigate([Routers.Home])
  }

  privacy() {
    window.open(Routers.LegalNotes + Routers.Privacy, '_blank')
  }
}
