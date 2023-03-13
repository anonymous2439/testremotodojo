import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SvgComponentsModule } from 'src/app/components/shared/svg-components/svg-components.module';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SvgComponentsModule,
    SharedComponentsModule,
    FontAwesomeModule,
    MatIconModule,
  ]
})
export class BlogModule { }
