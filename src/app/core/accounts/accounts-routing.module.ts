import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routers, TRouters } from '../enums/routers';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [
  {
    path: '', component: AccountsComponent,
    children: [
      {
        path: TRouters.Login,
        loadChildren: () => (
          import('src/app/core/accounts/login/login.module').then(login => login.LoginModule)
        )
      },
      {
        path: TRouters.Register,
        loadChildren: () => (
          import('src/app/core/accounts/register/register.module').then(register => register.RegisterModule)
        )
      },
      {
        path: TRouters.ForgotPassword,
        loadChildren: () => (
          import('src/app/core/accounts/forgot-password/forgot-password.module').then(forgotPassword => forgotPassword.ForgotPasswordModule)
        )
      },
      {
        path: '**',
        redirectTo: Routers.Accounts + Routers.Login
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
