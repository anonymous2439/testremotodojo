import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BlogModel } from 'src/app/core/data/blogs/blog.model';
import { Routers } from 'src/app/core/enums/routers';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() data: BlogModel;
  @Input() isBlog: boolean;
  @Input() isIndustryNews: boolean;

  day: string;
  month: string;
  year: string;
  content: string;
  image: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(event: any) {
    if (event.data.firstChange) {
      this.image = `url(${this.data.image})`;
      this.day = moment(this.data.date).format('DD');
      this.month = moment(this.data.date).format('MMM');
      this.year = moment(this.data.date).format('YYYY');

      let atLimit = this.data.content.length > 200;
      this.content = atLimit
        ? this.data.metaText.substr(0, 200) + '...'
        : this.data.metaText;
    }
  }

  readArticle() {
    let slug = this.data.slug;
    let url = `${Routers.Articles}/${slug}`;

    this.router.navigate([url]);
  }
}
