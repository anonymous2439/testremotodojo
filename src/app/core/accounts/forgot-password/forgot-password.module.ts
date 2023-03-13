import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswrodRoutingModule } from './forgot-password-routing.module';


@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswrodRoutingModule
  ]
})
export class ForgotPasswordModule { }
