import { Component, Input, OnInit } from '@angular/core';
import { AdvantagesModel } from 'src/app/core/data/advantages/advantages.model';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-collapse-card',
  templateUrl: './collapse-card.component.html',
  styleUrls: ['./collapse-card.component.scss'],
})
export class CollapseCardComponent implements OnInit {
  @Input() data: AdvantagesModel;

  faAngleDown = faAngleDown as IconProp;

  constructor() {}

  ngOnInit(): void {}

  toggleCollapse(ev: any) {
    let event = ev as PointerEvent;
    let target = event.currentTarget as HTMLElement;
    let isCollapsed = target.classList.contains('collapsed');

    if (isCollapsed) {
      target.classList.remove('collapsed');
    } else {
      this.foldAll();
      target.classList.add('collapsed');
    }
  }

  foldAll() {
    document
      .querySelectorAll('.collapse-card')
      .forEach((el) => el.classList.remove('collapsed'));
  }
}
