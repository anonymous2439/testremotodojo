import { Component, Input, OnInit } from '@angular/core';
import { BenefitModel } from 'src/app/core/data/benefits/benefits.model';

@Component({
  selector: 'app-benefits-card',
  templateUrl: './benefits-card.component.html',
  styleUrls: ['./benefits-card.component.scss']
})
export class BenefitsCardComponent implements OnInit {
  @Input() benefit: BenefitModel;

  constructor() { }

  ngOnInit(): void {
  }

}
