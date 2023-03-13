import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TRouters } from 'src/app/core/enums/routers';
import { DeclinedComponent } from './declined.component';

const routes: Routes = [
  {
    path: '',
    component: DeclinedComponent,
    children: [
      {
        path: TRouters.Declined,
        component: DeclinedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclinedRoutingModule {}
