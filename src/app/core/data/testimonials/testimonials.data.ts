import { TestimonialsModel } from './testimonials.model';

export const testimonials: TestimonialsModel[] = [
  {
    id: 1,
    name: 'George Brooks',
    comment:
      'The staff and support are second to none. They are polished, proficient, accessible and patient. They give out the best quality of service.',
    image: '../../../assets/testimonials/profiles/george-brooks.png',
    rating: '../../../assets/testimonials/stars/4-half-star-min.svg',
  },
  {
    id: 2,
    name: 'Lillie-Rose Edmonds',
    comment:
      'The agent is superb, efficient, and knowledgeable. They save me hassle and stress, so I can focus more energy into putting on a great show for our clients.',
    image: '../../../assets/testimonials/profiles/lillie-rose-edmonds.png',
    rating: '../../../assets/testimonials/stars/4-half-star-min.svg',
  },
  {
    id: 3,
    name: 'Daniela Gibson',
    comment:
      "For some people, I'm sure RemotoDojo is just a side show in their business, but for us, it's critical part of our success. They provided me with the best quality of service.",
    image: '../../../assets/testimonials/profiles/daniela-gibson.png',
    rating: '../../../assets/testimonials/stars/5-star.svg',
  },
  {
    id: 4,
    name: 'Emily Rogers',
    comment:
      "I didn't even know where to start as far as sale goes or how to reach people. RemotoDojo really made this part so easy and effective.",
    image: '../../../assets/testimonials/profiles/emily-rogers-min.png',
    rating: '../../../assets/testimonials/stars/4-half-star-min.svg',
  },
  // {
  //   id: 5,
  //   name: 'Raymond Murray',
  //   comment:
  //     'I started at stage zero. With RemotoDojo I was able to start my business with ease, and eventually build up enough knowledge and skills.',
  //   image: '../../../assets/testimonials/profiles/raymond-murray.png',
  //   rating: '../../../assets/testimonials/stars/5-star.svg',
  // },
  // {
  //   id: 6,
  //   name: 'Dave Porter',
  //   comment:
  //     'RemotoDojo has quickly become our go-to partner. Their team is organized, efficient, and have great attention to detail.',
  //   image: '../../../assets/testimonials/profiles/dave-porter.png',
  //   rating: '../../../assets/testimonials/stars/4-half-star-min.svg',
  // },
];

export const [defaultTestimonials] = testimonials;
