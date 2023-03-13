import { PricingModel } from './pricing.model';

export const pricing: PricingModel[] = [
  {
    id: 1,
    icon: './../../../assets/icons/clients.svg',
    title: 'BPO',
    subTitle: 'BPO',
    widget: './../../../assets/widgets/World_Map_Grayscale.png',
    platform: 'custom-software',
    description: `We assemble a team of dedicated RemotoDojo agents that fit your company culture and are uniquely equipped to meet your needs. Competent in 100+ support systems, we’ll build your team around the technology you already use. RemotoDojo provides unparalleled levels of actionable insights with tailored processes to suit your needs.`,
    othersCost: [
      {
        title: 'BPO SERVICES:',
        costRange: '$15-$20/HOUR/HEADCOUNT',
        description2: '',
      },
      {
        title: 'Office:',
        costRange: '$1,800/month+*',
        description2: '',
      },
      {
        title: 'Equipment:',
        costRange: '$2000/STAFF',
        description2: '',
      },
      {
        title: 'Taxes & Benefits:',
        costRange: '$800 - 2500/STAFF',
        description2: '',
      },
    ],
    remotodojoCost: [
      {
        title: 'BPO SERVICES:',
        costRange: '$8/HOUR/HEADCOUNT',
        description2: '',
      },
      {
        title: 'Office:',
        costRange: '$0',
        description2: '',
      },
      {
        title: 'Equipment:',
        costRange: '$0',
        description2: '',
      },
      {
        title: 'Taxes & Benefits:',
        costRange: '$0',
        description2: 'Save up to 70%',
      },
    ],
  },
  {
    id: 2,
    icon: './../../../assets/icons/website-responsive.svg',
    title: 'WEBSITE AND MOBILE',
    subTitle: 'IT',
    widget: './../../../assets/widgets/desktop-website-responsive.png',
    platform: 'responsive-websites',
    description: `If your company has a website that takes longer to load than a commercial cargo vessel, your customers are probably going to click off it and head to your rivals. This is especially true if you’re running a Website as a Service (WaaS) model. Once again though, there are huge costs involved in putting together designers and developers which will directly affect how long it takes. And these era, customers want that purpose-built fully-functional mobile app. A typical app development team will require a project manager, a developer for each platform and a UX/UI designer. Have you seen the costs to put together such a team? They aren’t cheap!`,
    othersCost: [
      {
        title: 'Development:',
        costRange: '$200 - $500/developer/day*',
        description2: '',
      },
      {
        title: 'Android Development:',
        costRange: '$210 - $550/developer/day*',
        description2: '',
      },
      {
        title: 'Office:',
        costRange: '$1800/developer/month*',
        description2: '',
      },
      {
        title: 'Equipment:',
        costRange: '$2000 - $3000/developer*',
        description2: '',
      },
      {
        title: 'Taxes & Benefits:',
        costRange: '$800 - $2500/developer/month*',
        description2: '',
      },
    ],
    remotodojoCost: [
      {
        title: 'Development:',
        costRange: '$96 - $280/developer/day*',
        description2: '',
      },
      {
        title: 'Office:',
        costRange: '$0',
        description2: '',
      },
      {
        title: 'Equipment:',
        costRange: '$0',
        description2: '',
      },
      {
        title: 'Taxes & Benefits:',
        costRange: '$0',
        description2: '',
      },
    ],
  },
];

export const [defaultPlatform] = pricing;
