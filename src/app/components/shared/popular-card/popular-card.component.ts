import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BlogModel } from 'src/app/core/data/blogs/blog.model';
import { Routers } from 'src/app/core/enums/routers';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss'],
})
export class PopularCardComponent implements OnInit {
  @Input() data: BlogModel;

  image: string;
  title: string;
  date: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(event: any) {
    if (event.data.firstChange) {
      this.image = `url(${this.data.image})`;
      this.date = moment(this.data.date).format('ll');

      let atLimit = this.data.title.length > 50;
      this.title = atLimit
        ? this.data.title.substr(0, 50) + '...'
        : this.data.title;
    }
  }

  readArticle() {
    let slug = this.data.slug;
    let url = `${Routers.Articles}/${slug}`;

    this.router.navigate([url]);
  }
}
