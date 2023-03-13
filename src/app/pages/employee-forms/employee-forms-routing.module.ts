import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routers, TRouters } from '../../core/enums/routers';
import { EmployeeFormsComponent } from './employee-forms.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: EmployeeFormsComponent,
    children: [
      {
        path: TRouters.Forms,
        component: EmployeeFormsComponent,
      },
      {
        path: TRouters.EmployeeFormsLogin,
        loadChildren: () =>
          import(
            'src/app/pages/employee-forms/employee-register/employee-register.module'
          ).then((employeeRegister) => employeeRegister.EmployeeRegisterModule),
      },
      {
        path: TRouters.EmployeeFormsRegister,
        loadChildren: () =>
          import(
            'src/app/pages/employee-forms/employee-login/employee-login.module'
          ).then((employeeLogin) => employeeLogin.EmployeeLoginModule),
      },
      {
        path: '**',
        redirectTo: Routers.EmployeeForms,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class EmployeeFormsRoutingModule {}
