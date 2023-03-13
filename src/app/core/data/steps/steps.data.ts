import { StepsModel } from './steps.model';

export const steps: StepsModel[] = [
  {
    id: 1,
    count: '../../../assets/widgets/number-01.svg',
    image: '../../../assets/icons/meeting-of-minds-v5.svg',
    name: 'Meeting Of Minds',
    mobileName: 'Plan',
    check: '../../../assets/widgets/step-check.svg',
    description:
      'A successful plan starts with the communication. RemotoDojo believes that effective communication opens up opportunities and aid businesses in achieving goals even remotely. Our business line and social media platforms are always open to you.',
  },
  {
    id: 2,
    count: '../../../assets/widgets/number-02.svg',
    image: '../../../assets/icons/identify-the-problem-v5.svg',
    name: 'Identify The Problem',
    mobileName: 'Identify',
    check: '../../../assets/widgets/step-check.svg',
    description:
      'We love to give solutions but it is important to identify first the concerns. This will be the start to get things going as this will serve as the guide throughout the process. Do not be hesitant in sharing your concerns. Each business has gone through this and it is solved when this is more discussed.',
  },
  {
    id: 3,
    count: '../../../assets/widgets/number-03.svg',
    image: '../../../assets/icons/generating-solutions-v5.svg',
    check: '../../../assets/widgets/step-check.svg',
    name: 'Generating Solutions',
    mobileName: 'Solution',
    description:
      "Remotodojo is a remote haven of solutions for businesses in need of BPO and IT staffing solutions. Our solutions were developed by our teams' talented and strategic minds. We ensure that every designed solution fits and qualifies for every business need. Trust me and it will be worth it.",
  },
  {
    id: 4,
    count: '../../../assets/widgets/number-04.svg',
    image: '../../../assets/icons/the-execution-v5.svg',
    check: '../../../assets/widgets/step-check.svg',
    name: 'The Execution',
    mobileName: 'Execution',
    description:
      'Now that everything is ready, we start out towards higher elevations. Remotodojo oversees the execution of its solutions. To give the greatest results for your organization, we conduct a series of monitoring and reporting. As we journey with you, rest assured we are with you every step of the way.',
  },
];

export const defaultSteps = steps[0];
