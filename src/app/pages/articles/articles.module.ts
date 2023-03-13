import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SharedComponentsModule } from '../../components/shared/shared-components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FontAwesomeModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    SharedComponentsModule,
    FormsModule
  ]
})
export class ArticlesModule { }
