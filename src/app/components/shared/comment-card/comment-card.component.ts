import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CommentModel } from 'src/app/core/data/comments/comment.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {
  @Input() data: CommentModel

  date: string

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(event: any) {
    if (event.data.firstChange) {
      this.date = moment(this.data.date).format('MMMM DD, YYYY')
    }
  }
}
