import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { AboutSections } from 'src/app/core/data/about/about.data';
import { BenefitModel } from 'src/app/core/data/benefits/benefits.model';
import { StatisticsData } from 'src/app/core/data/benefits/statistics.data';
import { AboutFragment } from 'src/app/core/enums/fragments';
import { Pages } from 'src/app/core/enums/pages';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';
import { SanityService } from '../../service/sanity.service';

// SANITY
import { Management } from '../../service/management';
import { Sales } from '../../service/sales';
import { Staff } from '../../service/staff';
import { Routers } from 'src/app/core/enums/routers';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  fragment = AboutFragment;
  aboutSections = AboutSections; // constant letiables
  statistics: BenefitModel[] = StatisticsData;
  routers = Routers;

  doughnutChartLabels: Label[] = [
    'Digital Marketing Agencies',
    'Software Houses',
    'E-Commerce Agencies',
    'IT Recruitment Companies',
    'Insurance Companies',
    'Marketing Companies',
    'Sales Organisations',
    'Transport',
    'Tourism',
    'Health Companies',
  ];
  doughnutChartColors: Color[] = [
    {
      backgroundColor: [
        '#205cdf',
        '#3269e2',
        '#4376e4',
        '#5583e7',
        '#799dec',
        '#8baaee',
        '#9db7f1',
        '#afc4f4',
        '#c0d1f6',
        '#d2def9',
      ],
    },
  ];
  doughnutChartData: SingleDataSet = [13, 9, 13, 15, 11, 8, 6, 8, 10, 7];

  doughnutChartOptions: ChartOptions = {
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: (item: any, data: any) => {
          let allData = data.datasets[item.datasetIndex].data;
          let tooltipLabel = data.labels[item.index];
          let tooltipData = allData[item.index];

          return ` ${tooltipData}%`;
        },
      },
    },
  };

  constructor(
    private navbarService: NavbarService,
    private sanityService: SanityService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  managements: Management[] = [];
  sales: Sales[] = [];
  staffs: Staff[] = [];

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit(): void {
    this.navbarService.getCurrentPage(Pages.About);
    this.getStatistics();
    this.getManagement();
    this.getSales();
    this.getStaff();

    this.titleService.setTitle('About Us | Who We Are | RemotoDojo');

    this.metaTagService.addTags([
      {
        name: 'description',
        content:
          'Learn more about the RemotoDojo staff. Who get together to deliver you new standards from all across the world. Our mission and vision. Keep reading.',
      },

      { name: 'robots', content: 'index, follow' },
      { charset: 'UTF-8' },
    ]);
  }

  async getManagement(): Promise<Management[]> {
    this.managements = await this.sanityService.getManagement();
    return this.managements;
  }

  async getSales(): Promise<Sales[]> {
    this.sales = await this.sanityService.getSales();
    return this.sales;
  }

  async getStaff(): Promise<Staff[]> {
    this.staffs = await this.sanityService.getStaff();
    return this.staffs;
  }

  getStatistics() {}

  downloadBrochure() {
    window.open(
      'https://drive.google.com/file/d/1N9Ih2rWUUMYtih8rqiV30ki1QxPrs8nm/view?usp=share_link',
      '_blank'
    );
  }
}
