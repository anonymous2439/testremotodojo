import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';


@NgModule({
  declarations: [PositionComponent],
  imports: [
    CommonModule,
    PositionRoutingModule,
    SharedComponentsModule
  ]
})
export class PositionModule { }
