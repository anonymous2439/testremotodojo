import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalNotesRoutingModule } from './legal-notes-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNotesComponent } from './legal-notes.component';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';


@NgModule({
  declarations: [
    LegalNotesComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    CommonModule,
    LegalNotesRoutingModule,
    SharedComponentsModule
  ]
})
export class LegalNotesModule { }
