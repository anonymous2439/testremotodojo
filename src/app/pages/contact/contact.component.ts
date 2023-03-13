import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertTypes } from 'src/app/core/enums/alert-types';
import { Countries } from 'src/app/core/enums/defaultData/countries';
import { Pages } from 'src/app/core/enums/pages';
import { Routers } from 'src/app/core/enums/routers';
import { ServiceOffered } from 'src/app/core/enums/defaultData/servicesOffered';
import { siteKey } from 'src/app/core/enums/site-key';
import { AlertPopupModel } from 'src/app/core/models/alert-popup.model';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';
import { validationPatterns } from 'src/app/core/utils/validations';


import { Meta, Title } from '@angular/platform-browser';

import { NetlifyFormsService } from '../../netlify-forms/netlify-forms.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  siteKey = siteKey;
  countriesData!: any;
  serviceOffer!: any;

  successAlert: AlertPopupModel = {
    type: AlertTypes.Success,
    description:
      'Our team will contact you shortly. Check your e-mail for updates.',
  };

  showSuccessAlert: boolean = false;
  loading: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private navbarService: NavbarService,
    private titleService: Title,
    private metaTagService: Meta,
    private fb: FormBuilder,
    private netlifyForms: NetlifyFormsService

  ) {}

  ngOnInit(): void {
    this.navbarService.getCurrentPage(Pages.Contact);
    this.form = this.buildForm();
    this.countriesData = Countries;
    this.serviceOffer = ServiceOffered;


    this.titleService.setTitle("Contact Us | RemotoDojo");

    this.metaTagService.addTags([
      { name: 'description', content:'Get your needs satisfied and ideas realized. Contact RemotoDojo to learn how we can help you achieve your business dreams. Email: sales@remotodojo.com' },
      
      { name: 'robots', content:'index, follow' },
      { charset: 'UTF-8'}

    ]);

  }

  buildForm() {
    return this.formBuilder.group({
      service: ['', validationPatterns.service],
      firstName: ['', validationPatterns.firstName],
      email: ['', validationPatterns.email],
      countryCode: ['+63', validationPatterns.countryCode],
      contactNo: ['', validationPatterns.contactNo],
      message: [''],
    });
  }

  submitForm() {
    this.loading = true;
    
    this.netlifyForms.submitContact(this.form.value).subscribe(
      () => {
        this.showSuccessAlert = true;
      },
      err => {
        console.log("an error occured");
      }
    );

  }

  closeAlertPopup() {
    this.showSuccessAlert = false;

    this.router.navigate([Routers.Home]);
  }
}
