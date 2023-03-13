import { ServiceSectionModel } from './services.model';

export const services: ServiceSectionModel[] = [
  {
    id: 1,
    services: [
      {
        id: 1,
        icon: './../../../assets/icons/responsive.svg',
        name: 'Responsive Websites',
        image: './../../../assets/services/it/responsive-websites-v2.png',
        description: `Website is one of the marketing efforts by a company. It is an opportunity for current and potential customers to learn more about the product and possibly to make a purchase.

        In order not to miss a potential sale, a responsive website is a must. RemotoDojo is meticulous in crafting websites that works easily for desktop, tablet, and smartphone. 
        
        If your website needs a tune up, you know the drill. RemotoDojo can develop a profitable website for your business.`,
      },
      {
        id: 2,
        icon: './../../../assets/icons/mobile-app.svg',
        name: 'Mobile Applications',
        image: './../../../assets/services/it/mobile-applications-v2.png',
        description: `Maintaining the trend is essential for increasing brand visibility. Such as the mobile application that can make the product or services more accessible to the potential clients and customers. 

        The RemotoDojo team can put together a fast, intuitively designed, and responsive mobile app for your brand that will level up customer service.`,
      },
      {
        id: 3,
        icon: './../../../assets/icons/software-as-a-service.svg',
        name: 'Software as a Service',
        image: './../../../assets/services/it/saas-v2.png',
        description: `Another factor why there is brand loyalty because of its accessibility and availability. RemotoDojo can create software that allows customers to access their brand from anywhere in the world at any time.`,
      },
      {
        id: 4,
        icon: './../../../assets/icons/search-engine.svg',
        name: 'Search Engine Optimization',
        image: './../../../assets/services/it/seo-v2.png',
        description: `A website can help company branding and marketing. A search engine optimization (SEO) specialist, on the other hand, can help increase the traffic and visibility of your website. The number of website visitors can produce sales conversion.`,
      },
      {
        id: 5,
        icon: './../../../assets/icons/website-service.svg',
        name: 'Website as a Service',
        image: './../../../assets/services/it/waas-v2.png',
        description: `In business, constant updates are necessary to provide the best service to clients and future partners. We offer browser, hosting, and Google updates to make sure that your website our up to date and performing well.`,
      },
      {
        id: 6,
        icon: './../../../assets/icons/cyber-security.svg',
        name: 'Cyber Security',
        image: './../../../assets/services/it/cyber-security-v2.png',
        description: `If your company is vulnerable, then it is open to threats. You lose trust to your customers when your company is being attacked. RemotoDojo can provide cyber security solutions that will give you peace of mind that no one is snooping through your company's internal communications.
        `,
      },
      {
        id: 7,
        icon: './../../../assets/icons/shop-fronts.svg',
        name: 'Shop Fronts',
        image: './../../../assets/services/it/store-front-v2.png',
        description: `The 21st century speaks that we live in an advanced and fast paced world. To deal with the trend, bring your storefront with modern applications and payment solutions. It will provide an appealing, effective, and ergonomic commercial face for your company. 
        `,
      },
      {
        id: 8,
        icon: './../../../assets/icons/content-creation-v2.svg',
        name: 'Content Creation',
        image: './../../../assets/services/it/content-creation-v2.png',
        description: `Content and creativity can draw more audience and clients to your brand. RemotoDojo is proud to have a pool of experts who create content for your websites and social media platforms. 

        Reach your target market with creative, interesting, and informative blogs, graphics, and videos remotely! They will surely always remember you.
        `,
      },
      {
        id: 9,
        icon: './../../../assets/icons/blockchain.svg',
        name: 'Blockchain',
        image: './../../../assets/services/it/block-chain-v2.png',
        description: `Blockchain can take over the world. 

        The technological decentralization of systems like finance, contracts, and cyber security sounds terrifying but it is putting the population in the driver’s seat when it comes to infallible data records, virtually hack-proof software, and systems accessible from anywhere. 
        
        Deal, learn, and prepare in blockchain that will bring your company to the future. RemotoDojo can put together a technologically superior, robust, decentralized platform that will make you the envy of more than just armchair speculators the world over.`,
      },
    ],
  },
];

export const defaultService = services[0].services[0];
