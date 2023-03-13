import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderOpenSvgComponent } from './folder-open-icon/folder-open.component';
import { CalendarBlankSvgComponent } from './calendar-blank-icon/calendar-blank.component';
import { ForumCommentSvgComponent } from './forum-comment-icon/forum-comment.component';



@NgModule({
  declarations: [
    FolderOpenSvgComponent,
    CalendarBlankSvgComponent,
    ForumCommentSvgComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FolderOpenSvgComponent,
    CalendarBlankSvgComponent,
    ForumCommentSvgComponent,
  ]
})
export class SvgComponentsModule { }
