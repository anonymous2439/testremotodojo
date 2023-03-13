import { CareersFragment } from '../../enums/fragments';
import { Routers } from '../../enums/routers';

let careersFragment = CareersFragment;
export const CareersSections = [
  {
    title: 'Careers',
    description1:'Become a ',
    description2: 'Ninja',
    text: 'We are giving professionals the rare chance to step up and catch up with the digital revolutions taking over the world. If you want to hone top skills and get top pay, then the Dojo’s doors can start you on that path!',
    cta: {
      label: 'VIEW POSITIONS',
      action: Routers.Careers,
      fragment: careersFragment.openPositions,
    },
  },
  {
    title: 'PERKS & BENEFITS',
    description: 'What you can gain from us',
    text1: 'COVID-19 HIRING PROCESS',
    text2:
      'RemotoDojo remains fully compliant with all present COVID-19 restrictions and is open to hosting online interviews. Additionally, we require any applicant arriving on-site to still comply with proper health protocols. We have ensured that a majority of our staff are either fully vaccinated or still follow proper safety guidelines.',
  },
  {
    title: 'OPEN POSITIONS',
  },
];
