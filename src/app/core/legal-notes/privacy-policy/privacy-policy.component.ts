import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { privacy } from '../../data/privacy/privacy.data';
import { Routers } from '../../enums/routers';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrivacyPolicyComponent implements OnInit {
  routers = Routers

  sections = privacy

  constructor() { }

  ngOnInit(): void {
  }

}
