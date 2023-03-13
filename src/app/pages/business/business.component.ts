import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateBusinessAnglesContactUsInput } from 'src/API';
import { advantages } from 'src/app/core/data/advantages/advantages.data';
import { AdvantagesModel } from 'src/app/core/data/advantages/advantages.model';
import { growBusiness } from 'src/app/core/data/grow-business/grow.data';
import { GrowBusinessModel } from 'src/app/core/data/grow-business/grow.model';
import { AlertTypes } from 'src/app/core/enums/alert-types';
import { Countries } from 'src/app/core/enums/defaultData/countries';
import { BusinessFragment } from 'src/app/core/enums/fragments';
import { Pages } from 'src/app/core/enums/pages';
import { Routers } from 'src/app/core/enums/routers';
import { AlertPopupModel } from 'src/app/core/models/alert-popup.model';
import { submitBusinessAnglesForms } from 'src/app/core/services/forms/forms.service';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';
import { validationPatterns } from 'src/app/core/utils/validations';

import { Meta, Title } from '@angular/platform-browser';



const [ connections, funding, mentoring ] = growBusiness

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  routers = Routers
  fragment = BusinessFragment

  growConnections = connections
  growFunding = funding
  growMentoring = mentoring

  growDesc: string

  advantagesCol1: AdvantagesModel[]
  advantagesCol2: AdvantagesModel[]

  form: FormGroup
  countriesData!: any

  successAlert: AlertPopupModel = {
    type: AlertTypes.Success,
    description: 'Thanks for sharing your idea with us, our experts will contact you shortly. Check your e-mail for updates.'
  }

  showSuccessAlert: boolean = false;
  loading: boolean = false

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private formBuilder: FormBuilder,
    private titleService: Title,
    private metaTagService: Meta

  ) { }

  ngOnInit(): void {
    this.navbarService.getCurrentPage(Pages.Business)
    this.form = this.buildForm()

    let full = advantages.length
    let half = Math.ceil(full / 2)
    this.advantagesCol1 = advantages.slice(0, half)
    this.advantagesCol2 = advantages.slice(half, full)
    this.countriesData = Countries


    this.titleService.setTitle("Jump-Start Your Business | Business Angels | RemotoDojo");

    this.metaTagService.addTags([
      { name: 'description', content:'We are the product of the business angels. RemotoDojo would not be here were it not for them. Contact us and take the first step in your journey to success!' },
      
      { name: 'robots', content:'index, follow' },
      { charset: 'UTF-8'}

    ]);



  }

  buildForm() {
    return this.formBuilder.group({
      firstName: ['', validationPatterns.firstName],
      lastName: ['', validationPatterns.lastName],
      startUpName: ['', [Validators.required]],
      email: ['', validationPatterns.email],
      countryCode: ['+63', validationPatterns.countryCode],
      contactNo: ['', validationPatterns.contactNo],
      comment: ['', validationPatterns.comment],
    })
  }

  hoverGrowBusiness(item: GrowBusinessModel) {
    document.querySelector('.overlay-desc')?.classList.add('show')
    
    this.growDesc = item.content
  }

  removeGrowOverlay() {
    document.querySelector('.overlay-desc')?.classList.remove('show')
  }

  submitForm(form: any) {
    this.loading = true
    let data: CreateBusinessAnglesContactUsInput = form

    data.phone = form.countryCode + form.contactNo;
    data.aboutCompany = form.comment

    this.unwantedData(data)
    console.log(data)
    submitBusinessAnglesForms(data).then((bAngelData: any) => {
      if (bAngelData) {
        this.showSuccessAlert = true;
        this.loading = false
      }
    }).catch((err) => {
      this.loading = false
      console.log("Error saving Business Angels Data to db.")
    })
  }

  unwantedData(data: any) {
    delete data.comment
    delete data.countryCode
    delete data.contactNo
  }

  closeAlertPopup() {
    this.showSuccessAlert = false
    
    this.router.navigate([Routers.Home])
  }
}
