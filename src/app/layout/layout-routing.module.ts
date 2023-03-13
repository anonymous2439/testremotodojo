import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../core/accounts/accounts.component';
import { TRouters } from '../core/enums/routers';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('src/app/pages/home/home.module').then(
                (module) => module.HomeModule
              ),
          },
        ],
      },
      {
        path: TRouters.Home,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('src/app/pages/home/home.module').then(
                (module) => module.HomeModule
              ),
          },
        ],
      },
      {
        path: TRouters.About,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('src/app/pages/about/about.module').then(
                (module) => module.AboutModule
              ),
          },
        ],
      },
      {
        path: TRouters.Articles,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('src/app/pages/articles/articles.module').then(
                (module) => module.ArticlesModule
              ),
          },
        ],
      },
      {
        path: TRouters.Business,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('src/app/pages/business/business.module').then(
                (module) => module.BusinessModule
              ),
          },
        ],
      },
      {
        path: TRouters.Contact,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('src/app/pages/contact/contact.module').then(
                (module) => module.ContactModule
              ),
          },
        ],
      },
      {
        path: TRouters.Careers,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('src/app/pages/careers/careers.module').then(
                (career) => career.CareersModule
              ),
          },
        ],
      },
      {
        path: TRouters.Accounts,
        loadChildren: () =>
          import('src/app/core/accounts/accounts.module').then(
            (account) => account.AccountsModule
          ),
      },
      {
        path: TRouters.LegalNotes,
        loadChildren: () =>
          import('src/app/core/legal-notes/legal-notes.module').then(
            (legal) => legal.LegalNotesModule
          ),
      },
      {
        path: TRouters.Forms,
        loadChildren: () =>
          import(
            'src/app/pages/employee-forms/employee-forms-routing.module'
          ).then((form) => form.EmployeeFormsRoutingModule),
      },
      {
        path: TRouters.Approved,
        loadChildren: () =>
          import(
            'src/app/pages/employee-forms/approved/approved-routing.module'
          ).then((approved) => approved.ApprovedRoutingModule),
      },
      {
        path: TRouters.Declined,
        loadChildren: () =>
          import(
            'src/app/pages/employee-forms/declined/declined-routing.module'
          ).then((declined) => declined.DeclinedRoutingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
