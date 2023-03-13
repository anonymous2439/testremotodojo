import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faAngleDown,
  faBars,
  faTimes,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { navMenu } from 'src/app/core/data/navigation/nav.data';
import { NavMenuModel } from 'src/app/core/data/navigation/nav.model';
import { services } from 'src/app/core/data/services/services.data';
import { Pages } from 'src/app/core/enums/pages';
import { Routers } from 'src/app/core/enums/routers';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routers = Routers;

  faAngleDown = faAngleDown as IconProp;
  faCaretRight = faCaretRight as IconProp;
  faBars = faBars as IconProp;
  faClose = faTimes as IconProp;

  isLoggedIn: boolean = false;
  showNavMobile: boolean = false;

  menuList: NavMenuModel[] = navMenu;
  collapsedMenu: number;
  currentRoute: number = 1;
  loginRoute: number = Pages.Login;

  constructor(
    private router: Router,
    private service: NavbarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.observables();
  }

  observables() {
    /** For testing only */
    this.activatedRoute.fragment.subscribe(
      (frag) => (this.isLoggedIn = frag === 'logged')
    );

    this.service.currentPage$.subscribe((obs) => (this.currentRoute = obs));
  }

  outsideTrigger(ev: Event) {
    let target = ev.target as Element;
    let currTarget = ev.currentTarget as Element;

    if (target.className === currTarget.className) {
      this.toggleMobileNav(false);
    }
  }

  toggleMobileNav(isOpen: boolean) {
    this.showNavMobile = isOpen;
  }

  navigateMenu(menu: any, ev: Event) {
    let el = ev.currentTarget as Element;
    if (el.id === this.collapsedMenu?.toString()) {
      return this.foldSubMenu();
    }

    if (menu.subMenu.length) {
      this.foldSubMenu();
      this.collapsedMenu = menu.id;

      document
        .querySelector(`#navSubMenu${menu.id}`)
        ?.classList.add('collapsed');
    } else {
      this.foldSubMenu();
      this.toggleMobileNav(false);
      this.router.navigate([menu.route]);
    }
  }

  foldSubMenu() {
    this.collapsedMenu = 0;
    document
      .querySelectorAll('.sub-mobile')
      .forEach((el) => el.classList.remove('collapsed'));
  }

  // START OF NAVBAR ON SCROLL
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar-wrapper') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-on-scroll');
    } else {
      element.classList.remove('navbar-on-scroll');
    }
  }

  onWindowScrollContactBtn() {
    let element = document.querySelector('.navbar-wrapper') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('on-scroll-contact-btn');
    } else {
      element.classList.remove('on-scroll-contact-btn');
    }
  }
  // END OF NAVBAR ON SCROLL
}
