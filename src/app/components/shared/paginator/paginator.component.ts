import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChevronLeft,
  faChevronRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Routers } from 'src/app/core/enums/routers';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() pageSize: number = 1;
  @Input() itemCount: number = 0;
  @Input() scrollTo: string;
  @Input() currPage: number;
  @Output() currentPage = new EventEmitter<number>();

  faChevronLeft = faChevronLeft as IconProp;
  faChevronRight = faChevronRight as IconProp;
  faAngleDoubleLeft = faAngleDoubleLeft as IconProp;
  faAngleDoubleRight = faAngleDoubleRight as IconProp;

  lastPage: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  pages() {
    return new Array(Math.ceil(this.itemCount / this.pageSize));
  }

  selectPage(isNext: boolean | number) {
    if (_isNumberValue(isNext)) {
      this.currPage = isNext as number;
    } else {
      this.currPage += isNext ? +1 : -1;
    }

    this.autoScroll();
    this.currentPage.emit(this.currPage);
  }

  isFirst() {
    return this.currPage === 0;
  }

  isLast() {
    return (
      this.currPage === this.pages().length - 1 || this.pages().length === 0
    );
  }

  autoScroll() {
    let [route] = this.router.url.split('#');
    this.router.navigate([route], { fragment: this.scrollTo });
  }

  showStartEllipses() {
    return this.currPage + 1 > 3;
  }

  showEndEllipses() {
    return this.currPage + 1 < this.pages().length - 2;
  }

  displayedPages() {
    if (this.pages().length < 3) {
      return this.pages();
    }

    let one, two, three;

    if (this.currPage === 0) {
      one = this.currPage;
      two = this.currPage + 1;
      three = this.currPage + 2;
    } else if (this.currPage === this.pages().length - 1) {
      one = this.currPage - 2;
      two = this.currPage - 1;
      three = this.currPage;
    } else {
      one = this.currPage - 1;
      two = this.currPage;
      three = this.currPage + 1;
    }

    return [one, two, three];
  }
}
