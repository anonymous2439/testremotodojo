import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routers, TRouters } from '../enums/routers';
import { LegalNotesComponent } from './legal-notes.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '', component: LegalNotesComponent,
    children: [
      {
        path: TRouters.Privacy,
        component: PrivacyPolicyComponent
      },
      {
        path: '**',
        redirectTo: Routers.LegalNotes + Routers.Privacy
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalNotesRoutingModule { }
