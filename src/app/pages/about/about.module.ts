import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedComponentsModule } from '../../components/shared/shared-components.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedComponentsModule,
    ChartsModule,
  ],
})
export class AboutModule {}
