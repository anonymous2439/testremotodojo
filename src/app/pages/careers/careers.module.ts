import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';


@NgModule({
  declarations: [
    CareersComponent,
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    SharedComponentsModule
  ]
})
export class CareersModule { }
