import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-forum-comment-svg',
  templateUrl: './forum-comment.svg',
})
export class ForumCommentSvgComponent {

  @Input() color: string = '#fff'

}