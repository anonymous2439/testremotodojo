import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  currentPage$: Observable<number>
  currentPageSource: Subject<number> = new Subject<number>()

  constructor() {
    this.currentPage$ = this.currentPageSource.asObservable()
  }

  getCurrentPage(id: number) {
    this.currentPageSource.next(id)
  }
}