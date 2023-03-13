import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class FooterModule {}
