import { Component } from '@angular/core';

import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { links } from './core/data/links/links.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remotodojo-webapp';
  route: string

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.autoScroll()
    // this.linkChecker()
  }

  autoScroll() {
    this.viewportScroller.setOffset([0,70]);

    this.router.events.pipe(filter((e) => e instanceof Scroll)).subscribe((e: any) => {
      let [route] = e.routerEvent.url.split('#')

      if (e.anchor) {

        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(e.anchor);
        }, this.route === route ? 0 : 500)

      } else if (e.position) {
        
        this.viewportScroller.scrollToPosition(e.position);

      } else {
        
        this.viewportScroller.scrollToPosition([0,0])

      }

      this.route = route

    })
  }
  
  linkChecker() {
    let path = window.location.pathname
    let short = links.find(x => x.short === path)

    if (short) {
      let link = document.createElement(`a`)
      link.setAttribute('href', short.url)
      link.click()
      link.remove()
    }
  }
}
