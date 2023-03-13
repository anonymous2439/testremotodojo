import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { AboutFragment, FooterFragment } from 'src/app/core/enums/fragments';
import { Routers } from 'src/app/core/enums/routers';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: number = moment().year();
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  aboutFragments = AboutFragment;
  routers = Routers;
  fragment = FooterFragment;

  constructor() {}

  ngOnInit(): void {}

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

  web(): void {
    window.open('https://www.remotodojo.com/');
  }

  tiktok(): void {
    window.open('https://www.tiktok.com/@remotodojo?_t=8XYtDsoVENG&_r=1');
  }
}
