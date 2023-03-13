import { Component, OnInit } from '@angular/core';
import { BenefitsData } from 'src/app/core/data/benefits/benefits.data';
import { BenefitModel } from 'src/app/core/data/benefits/benefits.model';
import { CareersSections } from 'src/app/core/data/careers/careers.data';
import { positionCategoriesData } from 'src/app/core/data/position-category/position-category.data';
import { positionsData } from 'src/app/core/data/position/position.data';
import { PositionModel } from 'src/app/core/data/position/position.model';
import { CareersFragment } from 'src/app/core/enums/fragments';
import { Pages } from 'src/app/core/enums/pages';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';
import { FooterFragment } from 'src/app/core/enums/fragments';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  fragment = CareersFragment;
  careersSections = CareersSections;
  footer = FooterFragment;

  benefits: BenefitModel[];
  allPositions: PositionModel[];
  positionCategories: any = positionCategoriesData;
  activeCategory!: number;

  constructor(
    private navbarService: NavbarService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    this.navbarService.getCurrentPage(Pages.Blank);

    this.getBenefitsData();
    this.getAllPositions();
    this.appendCategoryCount();
    this.setActiveFilter(positionCategoriesData[0]?.id);

    this.titleService.setTitle(
      'Employment Careers and Job Opportunities | RemotoDojo'
    );

    this.metaTagService.addTags([
      {
        name: 'description',
        content:
          'Explore open positions in RemotoDojo. Employment careers and job opportunities, internships, trainings. Click here to learn more.',
      },

      { name: 'robots', content: 'index, follow' },
      { charset: 'UTF-8' },
    ]);
  }

  setActiveFilter(id: number) {
    this.activeCategory = id;
  }

  getBenefitsData() {
    this.benefits = BenefitsData;
  }

  getAllPositions() {
    this.allPositions = positionsData;
  }

  appendCategoryCount() {
    this.positionCategories.map((category: any) => {
      category['count'] = this.allPositions.filter(
        (position) => position.category === category.id
      ).length;
    });
  }
}
