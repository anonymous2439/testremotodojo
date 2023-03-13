import { PortfolioModel } from './portfolio.model';

export const portfolio: PortfolioModel[] = [
  {
    id: 1,
    icon: './../../../assets/icons/website-responsive.svg',
    title: 'EFFECTIVE WEBSITES',
    description: `Here’s what we’ve done before. Call us today and
    we’ll serve as the springboard to your web project’s smashing success!`,
    works: [
      {
        id: 1,
        title: 'EVBoost',
        image: '../../../assets/portfolio/portfolio1-v2.png',
      },
      {
        id: 2,
        title: 'Moving Together',
        image: '../../../assets/portfolio/portfolio2-v2.png',
      },
      {
        id: 3,
        title: 'Royal Theatre Winton',
        image: '../../../assets/portfolio/portfolio3-v2.png',
      },
      {
        id: 4,
        title: 'All Interior Inc',
        image: '../../../assets/portfolio/portfolio4-v2.png',
      },
      {
        id: 5,
        title: 'Cebu Car Rental',
        image: '../../../assets/portfolio/portfolio5-v2.png',
      },
      {
        id: 6,
        title: 'Car Rental Philippines',
        image: '../../../assets/portfolio/portfolio6-v2.png',
      },
    ],
  },
];

export const [defaultPortfolio] = portfolio;
