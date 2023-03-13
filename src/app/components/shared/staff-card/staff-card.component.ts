import { Component, Input, OnInit } from '@angular/core';
import { StaffModel } from 'src/app/core/data/staff/staff.model';
import { staffs } from 'src/app/core/data/staff/staff.data';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss'],
})
export class StaffCardComponent implements OnInit {
  @Input() employeeId!: number;
  @Input() role!: string;

  data!: StaffModel;
  staffs: StaffModel[] = staffs;

  constructor() {}

  ngOnInit(): void {
    [this.data] = staffs.filter((staff) => staff.id === this.employeeId);
  }
}
