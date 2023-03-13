import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  {
    path: ':blog',
    loadChildren: () => (
      import('./blog/blog.module').then(module => module.BlogModule)
    )
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
