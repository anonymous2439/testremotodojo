import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AlertTypes } from 'src/app/core/enums/alert-types';
import { AlertPopupModel } from 'src/app/core/models/alert-popup.model';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss'],
})
export class AlertPopupComponent implements OnInit {
  @Input() data: AlertPopupModel;
  @Output() close = new EventEmitter();

  faClose = faTimes as IconProp;

  icon: string;
  title: string;

  constructor() {}

  ngOnInit(): void {
    this.icon = this.setIcon();
    this.title = this.setTitle();
  }

  setIcon() {
    let icon = '';

    switch (this.data.type) {
      case AlertTypes.Success:
        icon = 'success';
        break;
      case AlertTypes.Failed:
        icon = 'failed';
        break;
      case AlertTypes.Warning:
        icon = 'warning';
        break;
      case AlertTypes.Info:
        icon = 'info';
        break;
    }

    return `./../../../../assets/icons/alert-icons/${icon}.svg`;
  }

  setTitle() {
    let title = this.data.title ?? '';

    if (!this.data.title) {
      switch (this.data.type) {
        case AlertTypes.Success:
          title = 'SUCCESS';
          break;
        case AlertTypes.Failed:
          title = 'FAILED';
          break;
        case AlertTypes.Warning:
          title = 'WARNING';
          break;
        case AlertTypes.Info:
          title = 'INFO';
          break;
      }
    }

    return title;
  }

  closeAlert() {
    this.close.emit();
  }
}
