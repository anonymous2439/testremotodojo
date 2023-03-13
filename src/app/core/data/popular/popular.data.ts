import * as moment from "moment";
import { PopularBlogModel } from "./popular.model";

export const popular: PopularBlogModel[] = [
  {
    id: 1,
    image: './../../../../assets/widgets/article-card/card-4.jpg',
    title: '3 Simple Reasons Why You Should Believe Your ...',
    date: moment().toString()
  },
  {
    id: 2,
    image: './../../../../assets/widgets/article-card/card-6.jpg',
    title: "A Non-Techie's Guide to Good Web Design",
    date: moment().toString()
  },
  {
    id: 3,
    image: './../../../../assets/widgets/article-card/card-7.jpg',
    title: 'The Hefty Pros and Cons of Having Cross-Platform ...',
    date: moment().toString()
  }
]