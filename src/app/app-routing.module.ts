import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/layout/layout.module').then(
        (layout) => layout.LayoutModule
      ),
  },
  {
    path: 'design',
    loadChildren: () =>
      import('src/app/layout/design/design.module').then(
        (design) => design.DesignModule
      ),
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // NOT USED SINCE MANUAL SCROLL HAS BEEN CODED IN app.component.ts
      // scrollPositionRestoration: 'enabled',
      // anchorScrolling: 'enabled',
      // scrollOffset: [0, 70]
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
