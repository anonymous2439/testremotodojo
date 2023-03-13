import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmployeeRegisterComponent } from './employee-register.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeRegisterComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRegisterModule {}
