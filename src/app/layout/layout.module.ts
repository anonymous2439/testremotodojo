import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';

import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../components/shared/shared-components.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    FontAwesomeModule,
    SharedComponentsModule,
  ],
})
export class LayoutModule {}
