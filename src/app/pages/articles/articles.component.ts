import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { blogs } from 'src/app/core/data/blogs/blog.data';
import { BlogModel } from 'src/app/core/data/blogs/blog.model';
import { BlogCategories } from 'src/app/core/enums/blog-categories';
import { ArticlesFragment } from 'src/app/core/enums/fragments';
import { Pages } from 'src/app/core/enums/pages';
import { Routers } from 'src/app/core/enums/routers';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';


import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  faCaretRight = faCaretRight;
  faSearch = faSearch;

  fragment = ArticlesFragment;
  categories = Object.values(BlogCategories);

  isAscending: boolean = true;
  sortIcon: string = './../../../assets/icons/sort-calendar-ascending.svg';
  filterData: any;

  blogDesc: string;

  blogCurrPage: number;
  blogItemCount: number;
  blogPageSize: number = 6;
  blogData: BlogModel[];
  blogCol1: BlogModel[];
  blogCol2: BlogModel[];
  allBlogs: BlogModel[];

  industryNewsCurrPage: number;
  industryNewsPageSize: number = 3;
  industryNewsItemCount: number = blogs.length;
  industryNewsData: BlogModel[];

  popularData: BlogModel[] = blogs.filter((x) => x.isPopular);

  constructor(private router: Router, private navbarService: NavbarService, private titleService: Title,   private metaTagService: Meta
    ) {
    this.filterData = router.getCurrentNavigation()?.extras.state;


  }

  ngOnInit(): void {
    this.navbarService.getCurrentPage(Pages.Articles);
    this.blogFilter();
    this.industryNewsPage(0);

    this.titleService.setTitle("The Dojo Blogs | Our Hot Takes and Tips | RemotoDojo");

    this.metaTagService.addTags([
      { name: 'description', content:'Need more ideas on what makes a successful outsourcing project? Check out our blog for handy, in-depth tips as well as hot takes on today’s tech in business!' },
      
      { name: 'robots', content:'index, follow' },
      { charset: 'UTF-8'}

    ]);





  }

  sortToggle() {
    this.isAscending = !this.isAscending;

    if (this.isAscending) {
      this.sortIcon = './../../../assets/icons/sort-calendar-ascending.svg';
    } else {
      this.sortIcon = './../../../assets/icons/sort-calendar-descending.svg';
    }

    this.blogFilter();
  }

  blogFilter(isSearch?: boolean, value?: string) {
    if (this.filterData) {
      value = this.filterData.value;
      isSearch = this.filterData.isSearch;
    }

    this.blogDesc = value
      ? (isSearch ? 'Search: ' : 'Category: ') + value
      : 'Our hot takes and tips!';
    this.blogData = blogs.filter((x) =>
      x[isSearch ? 'title' : 'category']
        .toLocaleLowerCase()
        .includes(value?.toLocaleLowerCase() ?? '')
    );

    if (this.isAscending) this.blogData.reverse();

    this.blogPage(0);
    this.filterData = null;
  }

  blogPage(page: number) {
    this.blogItemCount = this.blogData.length;
    this.blogCurrPage = page;

    let start = page * this.blogPageSize;
    let end = (page + 1) * this.blogPageSize;
    let data = this.blogData.slice(start, end);

    this.allBlogs = data;

    this.blogCol1 = data.filter((obj, index) => index % 2 === 0);
    this.blogCol2 = data.filter((obj, index) => index % 2 === 1);

    this.router.navigate([Routers.Articles], { fragment: this.fragment.blog });
  }

  industryNewsPage(page: number) {
    this.industryNewsCurrPage = page;

    let start = page * this.industryNewsPageSize;
    let end = (page + 1) * this.industryNewsPageSize;

    this.industryNewsData = blogs.slice(start, end);
  }
}
