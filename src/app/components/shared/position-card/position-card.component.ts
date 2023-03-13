import { Component, Input, OnInit } from '@angular/core';
import { PositionModel } from 'src/app/core/data/position/position.model';
import { Router } from '@angular/router';
import { Routers } from 'src/app/core/enums/routers';

@Component({
  selector: 'app-position-card',
  templateUrl: './position-card.component.html',
  styleUrls: ['./position-card.component.scss']
})
export class PositionCardComponent implements OnInit {
  @Input() position: PositionModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails() {
    let { id } = this.position
    this.router.navigate([`${Routers.Careers + Routers.Position}/${id}`])
  }
}
