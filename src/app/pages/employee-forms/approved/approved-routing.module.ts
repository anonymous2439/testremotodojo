import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TRouters } from 'src/app/core/enums/routers';
import { ApprovedComponent } from './approved.component';

const routes: Routes = [
  {
    path: '',
    component: ApprovedComponent,
    children: [
      {
        path: TRouters.Approved,
        component: ApprovedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovedRoutingModule {}
