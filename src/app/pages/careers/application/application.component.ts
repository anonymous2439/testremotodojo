import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { positionsData } from 'src/app/core/data/position/position.data';
import { PositionModel } from 'src/app/core/data/position/position.model';
import { ApplyCareerFragment } from 'src/app/core/enums/fragments';
import { Pages } from 'src/app/core/enums/pages';
import { Routers } from 'src/app/core/enums/routers';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';
import { validationPatterns } from 'src/app/core/utils/validations';
import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import awsExports from 'src/aws-exports';
import { Countries } from 'src/app/core/enums/defaultData/countries';
import { HeardAboutOffer } from 'src/app/core/enums/defaultData/heardAboutOffer';
import { AlertTypes } from 'src/app/core/enums/alert-types';
import { AlertPopupModel } from 'src/app/core/models/alert-popup.model';
import { CreateCandidateLeadInput, CreateCandidateResumeInput } from 'src/API';
import { submitJobApplicationForm, uploadResume } from 'src/app/core/services/forms/forms.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  applyCareerFragment = ApplyCareerFragment;
  positionData: PositionModel
  iFileData: CreateCandidateResumeInput
  filename: string
  actualFile: File
  loading: boolean = false;

  jobID: string

  supportedExtensions: string = ".pdf, .docx, .doc, .odt, .pages"
  
  form: FormGroup
  countriesData!: any
  heardAboutOffer!: any

  alertData: AlertPopupModel

  showAlert: boolean = false;

  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navbarService: NavbarService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.navbarService.getCurrentPage(Pages.Blank)
    this.activatedRoute.paramMap.subscribe((data: any) => this.getPositionData(data))
    this.form = this.buildForm()
    this.countriesData = Countries
    this.heardAboutOffer = HeardAboutOffer
  }

  buildForm() {
    return this.formBuilder.group({
      firstName: ['', validationPatterns.firstName],
      lastName: ['', validationPatterns.lastName],
      email: ['', validationPatterns.email],
      countryCode: ['+63', validationPatterns.countryCode],
      contactNo: ['', validationPatterns.contactNo],
      address: ['', validationPatterns.address],
      country: ['', validationPatterns.country],
      offerHeard: [''],
      fileResume: [null]
    })
  }

  getPositionData(data: any) {
    let { id } = data.params
    this.jobID = id

    this.positionData = positionsData.find(pos => pos.id == id) as PositionModel
    
    if (!this.positionData) {
      this.router.navigate([Routers.Careers])
    } else {
      this.setBrowserTabTitle()
    }
  }

  async uploadFile(ev: any) {
    let { files } = ev.target
    let [ file ] = files as File[]
    this.actualFile = file
    this.filename = file.name
  }

  async storeFile(candidate: any) {
    let id: string = candidate.id
    if (!this.actualFile) return;
    let toSaveFileName = `remotoWeb-${uuidv4()}-${this.filename}`

    this.iFileData = {
      id: uuidv4(),
      candidateId: id,
      name: toSaveFileName,
      file: {
        bucket: awsExports.aws_user_files_s3_bucket,
        region: awsExports.aws_user_files_s3_bucket_region,
        key: toSaveFileName,
      },
    };

    await Storage.put(toSaveFileName, this.actualFile, {
      contentType: 'application/octet-stream'
    })
  }

  async submitApplication(applicationData: any) {
    if (!this.actualFile) {
      this.alertData = {
        type: AlertTypes.Warning,
        title: 'CV Required',
        description: `Please upload your Resume/CV.`
      }
      this.showAlert = true;

      return
    }

    this.loading = true;
    let data: CreateCandidateLeadInput = applicationData

    data.phone = applicationData.countryCode + applicationData.contactNo
    data.heardAboutOffer = applicationData.offerHeard
    data.positionTitle = this.positionData.title

    this.unwantedData(data)

    submitJobApplicationForm(data).then(async(jobData: any) => {
      if (jobData) {
        let candidate: CreateCandidateLeadInput = jobData.data.createCandidateLead
        this.storeFile(candidate)
        await uploadResume(this.iFileData).then((upload) => {
          if (upload) {
            this.alertData = {
              type: AlertTypes.Success,
              description: `Congrats, a step closer to your DOJO opportunity. Check your e-mail for updates.`
            }
            this.showAlert = true;
            this.loading = false;
          }
        })
      }
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  setBrowserTabTitle() {
    this.title.setTitle(`RemotoDojo | Apply - ${ this.positionData.title }`)
  }

  unwantedData(data: any) {
    delete data.fileResume
    delete data.offerHeard
    delete data.countryCode
    delete data.contactNo
  }

  closeAlertPopup() {
    this.showAlert = false

    if (this.alertData.type === AlertTypes.Success) {
      this.router.navigate([`/careers/position/${this.jobID}`])
    }
  }
}
