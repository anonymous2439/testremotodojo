import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() data: string;
  @Input() textSize: string = 'sm';
  @Input() clickable: boolean = true;

  faCheckCircle = faCheckCircle;

  constructor() {}

  ngOnInit(): void {}
}
