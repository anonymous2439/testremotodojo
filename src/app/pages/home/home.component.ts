import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  faMobileAlt,
  faDesktop,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { clients } from 'src/app/core/data/clients/clients.data';
import { ClientsModel } from 'src/app/core/data/clients/clients.model';
import {
  defaultPortfolio,
  portfolio,
} from 'src/app/core/data/portfolio/portfolio.data';
import { PortfolioModel } from 'src/app/core/data/portfolio/portfolio.model';
import {
  defaultPlatform,
  pricing,
} from 'src/app/core/data/pricing/pricing.data';
import { PricingModel } from 'src/app/core/data/pricing/pricing.model';
import {
  defaultService,
  services,
} from 'src/app/core/data/services/services.data';
import {
  defaultBPOService,
  bposervices,
} from 'src/app/core/data/services/bpo.data';

import { ServicesModel } from 'src/app/core/data/services/services.model';
import { BPOServicesModel } from 'src/app/core/data/services/bpo.model';
import { whyUs } from 'src/app/core/data/why-us/why-us.data';
import { AboutFragment, HomeFragment } from 'src/app/core/enums/fragments';
import { Router } from '@angular/router';
import { Pages } from 'src/app/core/enums/pages';
import { Routers } from 'src/app/core/enums/routers';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Swiper, {
  SwiperOptions,
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from 'swiper';
import { validationPatterns } from 'src/app/core/utils/validations';
import { AlertPopupModel } from 'src/app/core/models/alert-popup.model';
import { AlertTypes } from 'src/app/core/enums/alert-types';

import { defaultSteps, steps } from 'src/app/core/data/steps/steps.data';
import { StepsModel } from 'src/app/core/data/steps/steps.model';
import { Meta, Title } from '@angular/platform-browser';

import {
  defaultTestimonials,
  testimonials,
} from 'src/app/core/data/testimonials/testimonials.data';
import { TestimonialsModel } from 'src/app/core/data/testimonials/testimonials.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  faMobile = faMobileAlt;
  faDesktop = faDesktop;
  faClose = faTimes;
  faAngleDoubleRight = faAngleDoubleRight;
  panelOpenState = false;

  loading: boolean = false;
  showSuccessAlert: boolean = false;

  successAlert: AlertPopupModel = {
    type: AlertTypes.Success,
    description: `Our team will contact you shortly. Check your e-mail for updates.`,
  };

  routers = Routers;
  fragment = HomeFragment;
  aboutFragment = AboutFragment;
  basehref = window.location.origin;
  worldmapUrl = this.basehref + '/assets/worldmap/index.html';

  hoveredBPOService?: BPOServicesModel;
  hoveredService?: ServicesModel;
  hoveredStep?: StepsModel;
  hoveredStepMobile?: StepsModel;
  hoveredTestimonials?: TestimonialsModel;

  selectedBPOService: BPOServicesModel = defaultBPOService;
  selectedService: ServicesModel = defaultService;
  selectedStep: StepsModel = defaultSteps;
  selectedStepMobile: StepsModel = defaultSteps;
  selectedTestimonials: TestimonialsModel = defaultTestimonials;

  bpoServiceTiles: string[];

  bposervices = bposervices;
  services = services;
  steps = steps;
  testimonials = testimonials;

  showBPOServiceModal: boolean = false;
  showServiceModal: boolean = false;
  showStepModal: boolean = false;
  showStepModalMobile: boolean = false;
  showTestimonial: boolean = false;

  serviceTiles: string[];
  isTileLoading: boolean;

  whyUs = whyUs;

  pricing = pricing;
  hoveredPlatform?: PricingModel;
  selectedPlatform: PricingModel = defaultPlatform;

  portfolio = portfolio;
  hoveredPortfolio?: PortfolioModel;
  selectedPortfolio: PortfolioModel = defaultPortfolio;

  clients: ClientsModel[] = clients;

  selectedWork?: number;

  selectedReview?: number;

  stepCheck = '';
  stepUncheck = '';

  costBreakdownConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: true,
    loop: false,
    virtual: true,
  };

  portfolioConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 60,
    navigation: false,
    pagination: true,
    loop: true,
    breakpoints: {
      1080: {
        slidesPerView: 4,
      },
    },
  };

  testimonialsConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: false,
    pagination: true,
    loop: true,
    breakpoints: {
      720: {
        slidesPerView: 2,
      },
      1080: {
        slidesPerView: 4,
      },
    },
  };

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private formBuilder: FormBuilder,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    this.navbarService.getCurrentPage(Pages.Home);
    this.getServicesForMobileScreen();
    this.getBPOServicesForMobileScreen();
    this.form = this.buildForm();
    Swiper.use([Navigation, Pagination, Autoplay, Virtual]);

    this.titleService.setTitle(
      'RemotoDojo | Outsourcing Company & Offshore Service'
    );

    this.metaTagService.addTags([
      {
        name: 'description',
        content:
          'RemotoDojo is an outsourcing company with IT and BPO experts that can provide offshore service professionally.',
      },
      {
        name: 'keywords',
        content:
          'business process outsourcing, offshore outsourcing, remote team, offshore staff, remote staff, staffing solutions, offshore team',
      },
      { name: 'robots', content: 'index, follow' },
      { charset: 'UTF-8' },
    ]);
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
    this.router.navigate([Routers.Home]);
  }

  getWorldMapSrc() {
    return this.worldmapUrl;
  }

  hoverBPOService(bposervice?: BPOServicesModel) {
    this.hoveredBPOService = bposervice;
  }

  hoverService(service?: ServicesModel) {
    this.hoveredService = service;
  }

  hoverStep(step?: StepsModel) {
    this.hoveredStep = step;
  }

  hoverStepMobile(step?: StepsModel) {
    this.hoveredStepMobile = step;
  }

  hoverTestimonials(testimonial?: TestimonialsModel) {
    this.hoveredTestimonials = testimonial;
  }

  toggleBPOServiceModal(show: boolean) {
    this.showBPOServiceModal = show;
  }

  toggleServiceModal(show: boolean) {
    this.showServiceModal = show;
  }

  toggleStepModal(show: boolean) {
    this.showStepModal = show;
  }

  toggleStepModalMobile(show: boolean) {
    this.showStepModalMobile = show;
  }

  toggleTestimonial(show: boolean) {
    this.showTestimonial = show;
  }

  selectBPOService(isClick: boolean, bposervice: BPOServicesModel) {
    if (bposervice.id !== this.selectedBPOService.id) {
      this.isTileLoading = true;
    }

    this.selectedBPOService = bposervice;
    this.toggleBPOServiceModal(isClick);
  }

  selectService(isClick: boolean, service: ServicesModel) {
    if (service.id !== this.selectedService.id) {
      this.isTileLoading = true;
    }

    this.selectedService = service;
    this.toggleServiceModal(isClick);
  }

  selectStep(isClick: boolean, step: StepsModel, imageNameObject: any) {
    if (step.id !== this.selectedStep.id) {
      this.isTileLoading = true;
    }

    this.selectedStep = step;
    this.toggleStepModal(isClick);

    this.stepCheck = imageNameObject.img;
    this.stepUncheck = imageNameObject.image;
  }

  selectStepMobile(isClick: boolean, step: StepsModel) {
    if (step.id !== this.selectedStepMobile.id) {
      this.isTileLoading = true;
    }

    this.selectedStepMobile = step;
    this.toggleStepModalMobile(isClick);
  }

  selectTestimonial(isClick: boolean, testimonial: TestimonialsModel) {
    if (testimonial.id !== this.selectedTestimonials.id) {
      this.isTileLoading = true;
    }

    this.selectedTestimonials = testimonial;
    this.toggleTestimonial(isClick);
  }

  getServicesForMobileScreen() {
    let res: ServicesModel[] = [];

    services.forEach((obj) => {
      res = [...res, ...obj.services];
    });

    return res;
  }

  getBPOServicesForMobileScreen() {
    let res: BPOServicesModel[] = [];

    bposervices.forEach((obj) => {
      res = [...res, ...obj.bposervices];
    });

    return res;
  }

  showMapTooltip(ev: any, loc: ClientsModel) {
    let currentTarget = ev.currentTarget as HTMLElement;
    let tooltip = currentTarget.querySelector('div.tooltip');

    if (tooltip) {
      let locations = '';

      loc.locations.forEach((loc) => (locations += `<span>${loc}</span>`));

      tooltip.innerHTML = `<span class="title">${loc.name}</span>` + locations;
    }
  }

  facebook(): void {
    window.open('https://www.facebook.com/RemotoDojo/');
  }

  twitter(): void {
    window.open('https://www.twitter.com/remotodojo');
  }

  instagram(): void {
    window.open('https://www.instagram.com/remotodojo');
  }

  linkedin(): void {
    window.open('https://www.linkedin.com/company/remotodojo');
  }

  youtube(): void {
    window.open('https://www.youtube.com/channel/UCghzI468HL7wtHSbXAgsh1w');
  }

  tiktok(): void {
    window.open('https://www.tiktok.com/@remotodojo?_t=8XYtDsoVENG&_r=1');
  }
}
