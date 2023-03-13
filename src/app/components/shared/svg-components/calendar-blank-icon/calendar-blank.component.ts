import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-calendar-blank-svg',
  templateUrl: './calendar-blank.svg',
})
export class CalendarBlankSvgComponent {

  @Input() color: string = '#fff'

}