import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TRouters } from 'src/app/core/enums/routers';
import { CareersComponent } from './careers.component';

const routes: Routes = [
  { path: '', component: CareersComponent },
  {
    path: TRouters.Position,
    loadChildren: () => (
      import('./position/position.module').then(position => position.PositionModule)
    )
  },
  {
    path: TRouters.Application,
    loadChildren: () => (
      import('./application/application.module').then(application => application.ApplicationModule)
    )
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
