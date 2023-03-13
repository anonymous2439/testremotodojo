import { CareersFragment } from '../../enums/fragments';
import { Routers } from '../../enums/routers';

// basehref is the domain of the website i.e: "http://localhost:4200" or "https://amplifyapp.com";
let basehref = window.location.origin;

export const AboutSections = [
  {
    name: 'ABOUT US',
    description1: 'Who We Are',
    description2: 'Dojo',
    text: 'We are giving high-quality BPO and IT staff at a very reasonable price.',
    text2:
      'Our organization combines the great value of the offshore BPO and IT talent with strong investments in sourcing, upskilling, and up-to-date technology expertise.',
    text3:
      'With all of these from RemotoDojo, your company can have innovative and professional outsourcing department without the usual obstacles and overhead.',
  },
  {
    name: 'ABOUT',
    description: 'Who we are',
    text1:
      'We’re bringing you the perks of high-quality BPO and I.T. staff without the high price!',
    text2:
      'Our organization combines the great value of the offshore BPO and IT talent pool with strong investments in sourcing, upskilling and up-to-date tech expertise. Put that together and you have all the benefits of an innovative, professional outsourcing department without the usual obstacles and overhead.',
    img: './../../../assets/widgets/desktop-about-1.png',
  },
  {
    name: 'CLIENTELE',
    description: 'Who might you be?',
    img: './../../../assets/widgets/desktop-about-2.svg',
    text1:
      'So, you know who we are, but who do we serve? Here is a breakdown of all our clientele and what industries we’ve helped with their admin, BPO wants, IT staffing and design needs.',
    cta: {
      label: 'CONSULT NOW',
      action: Routers.Contact,
      fragment: 'contact-page',
    },
    clientele: [
      {
        name: 'Digital Marketing Agencies',
        color: '#205cdf',
        percentage: 13,
      },
      {
        name: 'Software Houses',
        color: '#3269e2',
        percentage: 9,
      },
      {
        name: 'E-Commerce Agencies',
        color: '#4376e4',
        percentage: 13,
      },
      {
        name: 'IT Recruitment Companies',
        color: '#5583e7',
        percentage: 15,
      },
      {
        name: 'Insurance Companies',
        color: '#799dec',
        percentage: 11,
      },
      {
        name: 'Marketing Companies',
        color: '#8baaee',
        percentage: 8,
      },
      {
        name: 'Sales Organisations',
        color: '#9db7f1',
        percentage: 6,
      },
      {
        name: 'Transport',
        color: '#afc4f4',
        percentage: 8,
      },
      {
        name: 'Tourism',
        color: '#c0d1f6',
        percentage: 10,
      },
      {
        name: 'Health Companies',
        color: '#d2def9',
        percentage: 7,
      },
    ],
  },
  {
    name: 'BROCHURE',
    description: 'Refer us anytime!',
    text1:
      'Grab our latest brochure and share it to anyone who wants a quick reference about who we are, as well as more information on all our services.',
    img: './../../../assets/banners/brochure-featured-v4.svg',
    cta: {
      label: 'DOWNLOAD BROCHURE',
      action: basehref + '/assets/brochure/brochure.pdf',
      fileName: 'RemotoDojo Booklet.pdf',
    },
  },
  {
    img: '',
    text1: 'Got more questions?',
    text2:
      'RemotoDojo is always available and open for free consultations and inquiries. Contact us for anything related to BPO and IT industries. The RemotoDojo team can address and will take your companies into a new business landscape.',
    cta: {
      label: 'CONTACT US',
      action: Routers.Contact,
      fragment: 'contact-page',
    },
  },
  {
    name: 'THE LEADERSHIP',
    description: 'The people who made it possible',
    text: 'RemotoDojo is run by a highly experienced, passionate, and very proactive leaders. Their experiences in the BPO and IT are enough proof that they are aware with the outsource race shaping global business today. ',
    bosses: [2, 3, 4, 69, 68, 37, 57, 29],
  },
  {
    name: 'THE COMPETENT TEAM',
    description3: 'The Senseis',
    description: 'The amazing Ninjas',
    description2: 'The Sales Force',
    leaders: [12, 13, 66, 5],
    sales: [24, 33, 35, 36, 43, 51, 52],
    staff: [61, 59, 42, 67, 60, 7, 21, 54],
  },
  {
    text: 'Join us now and be part of our awesomeness!',
    cta: {
      label: 'VISIT CAREERS',
      action: Routers.Careers,
      fragment: CareersFragment.openPositions,
    },
  },
];
