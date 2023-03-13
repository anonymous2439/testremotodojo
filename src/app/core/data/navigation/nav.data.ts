import { Router } from '@angular/router';
import {
  AboutFragment,
  ArticlesFragment,
  BusinessFragment,
  HomeFragment,
} from '../../enums/fragments';
import { Pages } from '../../enums/pages';
import { Routers } from '../../enums/routers';
import { NavMenuModel } from './nav.model';

export const navMenu: NavMenuModel[] = [
  {
    id: Pages.Home,
    name: 'Home',
    route: Routers.Home,
    subMenu: [
      {
        id: 1,
        name: 'Home',
        route: Routers.Home,
        fragmentId: HomeFragment.home,
      },
      {
        id: 2,
        name: 'Services',
        route: Routers.Home,
        fragmentId: HomeFragment.services,
      },
      {
        id: 3,
        name: 'Why Us?',
        route: Routers.Home,
        fragmentId: HomeFragment.whyUs,
      },
      {
        id: 4,
        name: 'Workflow',
        route: Routers.Home,
        fragmentId: HomeFragment.steps,
      },
      {
        id: 4,
        name: 'Pricing',
        route: Routers.Home,
        fragmentId: HomeFragment.pricing,
      },
      {
        id: 5,
        name: 'Our Works',
        route: Routers.Home,
        fragmentId: HomeFragment.ourWorks,
      },
      {
        id: 6,
        name: 'Testimonials',
        route: Routers.Home,
        fragmentId: HomeFragment.testimonials,
      },
    ],
  },
  {
    id: Pages.About,
    name: 'About',
    route: Routers.About,
    subMenu: [
      {
        id: 1,
        name: 'Who We Are',
        route: Routers.About,
        fragmentId: AboutFragment.whoWeAre,
      },
      {
        id: 2,
        name: 'Brochure',
        route: Routers.About,
        fragmentId: AboutFragment.brochure,
      },
      {
        id: 3,
        name: 'The Leadership',
        route: Routers.About,
        fragmentId: AboutFragment.bosses,
      },
      {
        id: 4,
        name: 'The Competent Team',
        route: Routers.About,
        fragmentId: AboutFragment.staff,
      },
    ],
  },
  {
    id: Pages.Articles,
    name: 'Articles',
    route: Routers.Articles,
    subMenu: [
      {
        id: 1,
        name: 'Blogs',
        route: Routers.Articles,
        fragmentId: ArticlesFragment.blog,
      },
    ],
  },
  {
    id: Pages.Business,
    name: 'Business Angels',
    route: Routers.Business,
    subMenu: [
      {
        id: 1,
        name: 'Advantages',
        route: Routers.Business,
        fragmentId: BusinessFragment.advantages,
      },
      {
        id: 2,
        name: 'Get in Touch',
        route: Routers.Business,
        fragmentId: BusinessFragment.getInTouch,
      },
    ],
  },
];
