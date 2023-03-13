import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { LeaveRequestComponent } from './leave-request.component';

@NgModule({
  declarations: [LeaveRequestComponent],
  imports: [CommonModule, MatRadioModule],
  exports: [],
})
export class LeaveRequestModule {}
