import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
// import { CreateWebContactUsInput } from 'src/API';
import * as moment from 'moment';
import { blogs } from 'src/app/core/data/blogs/blog.data';
// import { AlertTypes } from '../../../core/enums/alert-types';
import { BlogModel } from 'src/app/core/data/blogs/blog.model';
import { comments } from 'src/app/core/data/comments/comment.data';
import { CommentModel } from 'src/app/core/data/comments/comment.model';
// import { AlertPopupModel } from '../../../core/models/alert-popup.model';
import { BlogCategories } from 'src/app/core/enums/blog-categories';
import { Pages } from 'src/app/core/enums/pages';
import { Routers } from 'src/app/core/enums/routers';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';
// import { submitContactUsForm } from 'src/app/core/services/forms/forms.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {
  gray: string = '#969696';

  // successAlert: AlertPopupModel = {
  //   type: AlertTypes.Success,
  //   description: 'Your request has been sent. Check your e-mail for updates.',
  // };

  data: BlogModel;
  popularData: BlogModel[] = blogs.filter((x) => x.isPopular);
  categories = Object.values(BlogCategories);
  comments: CommentModel[] = [];

  blogId: number;
  // showSuccessAlert: boolean = false;
  // loading: boolean = false;

  date: string;
  image: string;
  content: string;

  constructor(
    private title: Title,
    private metadesc: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.navbarService.getCurrentPage(Pages.Articles);

    this.activatedRoute.paramMap.subscribe((data: any) =>
      this.getBlogData(data.params)
    );
    this.getBlogComments();

    this.blogId = this.activatedRoute.snapshot.params['blog'];

    //this.titleService.setTitle("Cyber Monday: A Stress Test for IT Outsourcing? | RemotoDojo");

   /* this.metaTagService.addTags([
      { name: 'description', content:'Cyber Monday is a very crucial time of the year for all IT outsourcing organizations, large and small, in terms of all their digital assets. Click here.' },
      
      { name: 'robots', content:'index, follow' },
      { charset: 'UTF-8'}

    ]);*/
  }

  filter(isSearch: boolean, value: string) {
    this.router.navigate([Routers.Articles], { state: { isSearch, value } });
  }

  getBlogData(data: any) {
    this.data = blogs.find((x) => x.slug == data.blog) as BlogModel;

    if (this.data) {
     this.setBrowserTabTitle();
     this.setDesc();
     
      this.image = `url(${this.data.image})`;
      this.date = moment(this.data.date).format('MMMM DD, YYYY');
      this.content = this.data.content;
    } else this.router.navigate([Routers.Articles]);
  }

  getBlogComments() {
    this.comments = comments;
  }

 setBrowserTabTitle() {
    this.title.setTitle(`${this.data.metaTitle} | RemotoDojo`);
  }
  setDesc(){
    this.metadesc.addTags([ 
    { name: 'description', content: this.data.metaText },
      
    {name: 'robots', content:'index, follow' },

    { charset: 'UTF-8'}
]
    
    );
  }

  // closeAlertPopup() {
  //   this.showSuccessAlert = false;

  //   this.router.navigate([Routers.Home]);
  // }

  // submitForm(replyData: any) {
  //   this.loading = true;
  //   let data: CreateWebContactUsInput = replyData;

  //   // this.unwantedData(data);

  //   submitContactUsForm(data).then((cData: any) => {
  //     if (cData) {
  //       this.showSuccessAlert = true;
  //       this.loading = false;
  //     }
  //   });
  // }
}
