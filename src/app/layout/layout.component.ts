import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { capFirstLetter } from '../core/utils/cap-first-letter';
import { replaceAll } from '../core/utils/replace-all';

@Component({
  selector: 'app-main',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private title: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setBrowserTabTitle(this.router.url)

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.setBrowserTabTitle(event.url)
      }
    })
  }

  // Note: check other pages that are not under layout if they need to set the title for the tab.
  setBrowserTabTitle(url: string) {
    let [main, section] = url.split('#')

    if(main === '/') {
      main = " | Home ";
    } else {
      main = capFirstLetter(replaceAll(main.replace('/', '| '), '/', ' - '))
    }

    section = capFirstLetter(replaceAll(section, '-', ' '))
    
    this.title.setTitle(`RemotoDojo ${ main }${ section ? ' - ' + section : '' }`)
  }
}
