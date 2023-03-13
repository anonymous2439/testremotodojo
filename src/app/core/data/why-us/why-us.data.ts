import { WhyUsModel } from './why-us.model';

export const totalClients = 100;

export const whyUs: WhyUsModel[] = [
  {
    id: 1,
    location: 'Singapore',
    percentage: Math.ceil((34 / totalClients) * 100) + '%',
    clientCount: 34,
    isActive: false,
    percentImg: '../../../../assets/widgets/singapore-percent-v4.svg',
  },
  {
    id: 2,
    location: 'Australia',
    percentage: Math.ceil((47 / totalClients) * 100) + '%',
    clientCount: 47,
    isActive: false,
    percentImg: '../../../../assets/widgets/australia-percent-v4.svg',
  },
  {
    id: 3,
    location: 'UK',
    percentage: Math.ceil((50 / totalClients) * 100) + '%',
    clientCount: 50,
    isActive: false,
    percentImg: '../../../../assets/widgets/uk-percent-v4.svg',
  },
  {
    id: 4,
    location: 'USA',
    percentage: Math.ceil((56 / totalClients) * 100) + '%',
    clientCount: 56,
    isActive: false,
    percentImg: '../../../../assets/widgets/usa-percent-v4.svg',
  },
];
