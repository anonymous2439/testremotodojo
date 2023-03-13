import { BPOServiceSectionModel } from './bpo.model';

export const bposervices: BPOServiceSectionModel[] = [
  {
    id: 1,
    bposervices: [
      {
        id: 1,
        icon: './../../../assets/icons/customer-service.svg',
        name: 'Customer Service',
        image: './../../../assets/services/bpo/customer-service-v2.png',
        description: `Customers are happy when they are satisfied and satisfaction comes when more than efficient assistance is given even before and after customers' transaction. Customer Service is essential to making sure that clients understand if they seek clarification on the product or service they are acquiring.`,
      },
      {
        id: 2,
        icon: './../../../assets/icons/customer-support.svg',
        name: 'Customer Support',
        image: './../../../assets/services/bpo/customer-support-v2.png',
        description: `Do your customers have concerns and inquiries? Customer service representatives can handle and solve them, as particularly for product and service information, as well as taking orders and processing returns. When customers understand, they purchase and boost company sales.`,
      },
      {
        id: 3,
        icon: './../../../assets/icons/chat-support.svg',
        name: 'Chat Support',
        image: './../../../assets/services/bpo/chat-support-v2.png',
        description: `Messages are important to make sure the company and customers are always connected. Having a chat support team is the greatest approach to complete this function on a daily basis.`,
      },
      {
        id: 4,
        icon: './../../../assets/icons/tech-support.svg',
        name: 'Tech Support',
        image: './../../../assets/services/bpo/tech-support-v2.png',
        description: `The need of having an IT infrastructure is becoming more widely acknowledged in this digital era. The essence of having technical support is to make sure that everything is maintained. When IT concerns arise, the technical support team can configure hardware and software, install, manage, repair, and resolve network issues.`,
      },
      {
        id: 5,
        icon: './../../../assets/icons/support-staff.svg',
        name: 'Support Staff',
        image: './../../../assets/services/bpo/support-staff-v2.png',
        description: `Multitasking is important and every support staff can master this quality. RemotoDojo's support staff can forward calls, message, and even jot down the minutes of the meetings. Having a support staff can definitely achieve more deliverables and beat the deadlines.`,
      },
      {
        id: 6,
        icon: './../../../assets/icons/lead-generation.svg',
        name: 'Lead Generation',
        image: './../../../assets/services/bpo/lead-generation-v2.png',
        description: `Reaching sales goals requires dedication and commitment. Our lead generations are responsible for selling corporate products and services. It can be through sales lead, prospect calls, and answering calls from clients and potential customers.`,
      },
      {
        id: 7,
        icon: './../../../assets/icons/virtual-assistance.svg',
        name: 'Virtual Assistance',
        image: './../../../assets/services/bpo/virtual-assistance-v2.png',
        description: `RemotoDojo is your remote arena. One of the services that we take pride that can be done remotely is virtual assistance. The main job of virtual assistants is to deliver high-quality work on administrative projects with minimum supervision.`,
      },
      {
        id: 8,
        icon: './../../../assets/icons/digital-marketing.svg',
        name: 'Digital Marketing',
        image: './../../../assets/services/bpo/digital-marketing-v2.png',
        description: `The pandemic has affected the businesses but the digital marketing has helped them to thrive. A digital marketing is the trend to make sure the company is visible across the globe. RemotoDojo is a nest where it brainstorms new and creative ideas that can contribute company growth. This includes planning and execution for advertising campaigns, database marketing, email, search engine optimization (SEO), and social media optimization (SMO).`,
      },
      {
        id: 9,
        icon: './../../../assets/icons/sales.svg',
        name: 'Sales',
        image: './../../../assets/services/bpo/sales-v2.png',
        description: `The sales team's function is essential to the sustainability of the business. Hence, there is a need to hire experienced and strong sales team who can deliver the goal. The main job is even working remotely it can sell products and meet customers needs that will convert to sales. When a company hires a sales team who is strategic and knows how to deal with customers, then your company can move for.`,
      },
      {
        id: 10,
        icon: './../../../assets/icons/book-keeping.svg',
        name: 'Bookkeeping',
        image: './../../../assets/services/bpo/bookkeeping-v2.png',
        description: `It's easy to monitor the company's financial status if you have a bookkeeper who can do this job. A bookkeeper keeps and processes records such as expenses, financial transactions and data, invoices, purchases, payments, and sales revenue. A company's bookkeepers are also its guardians, ensuring that it has complied with all applicable laws and regulations.`,
      },
    ],
  },
];

export const defaultBPOService = bposervices[0].bposervices[0];
