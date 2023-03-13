import { Validators } from '@angular/forms';
import { emailPattern } from './email-pattern';
import { numericPattern } from './numeric-pattern';
import { phoneValidation } from './phone-validation';

export const validationPatterns = {
  service: [Validators.required],

  fullName: [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(100),
  ],

  firstName: [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(50),
  ],

  lastName: [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(50),
  ],

  address: [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(100),
  ],

  email: [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(30),
    Validators.pattern(emailPattern()),
  ],

  country: [Validators.required],

  countryCode: [Validators.required],

  companyName: [Validators.minLength(5), Validators.maxLength(100)],

  contactNo: [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20),
    Validators.pattern(numericPattern()),
    phoneValidation,
  ],

  password: [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(30),
  ],

  comment: [Validators.minLength(1), Validators.maxLength(300)],

  iPolicy: [Validators.requiredTrue],

  recaptcha: [Validators.required],

  name: [Validators.required],

  date: [Validators.required],

  amount: [Validators.required],

  department: [Validators.required],

  reason: [Validators.required],

  dateOfCashAdvanceNeeded: [Validators.required],

  amountOfPayrollDeduction: [Validators.required],

  doYouHaveAnExistingBalance: [Validators.required],

  loanBalance: [Validators.required],

  borrowersSignature: [Validators.required],

  releasedBy: [Validators.required],

  paymentTerms: [Validators.required],

  dateOfCashLoanNeeded: [Validators.required],

  employeeName: [Validators.required],

  employeeId: [Validators.required],

  designation: [Validators.required],

  employmentStatus: [Validators.required],

  startDate: [Validators.required],

  endDate: [Validators.required],

  totalDays: [Validators.required],

  resumingDate: [Validators.required],

  remarks: [Validators.required],

  employeesSignature: [Validators.required],

  immediateHeadsApproval: [Validators.required],

  signature: [Validators.required],

  comments: [Validators.required],

  loanAmount: [Validators.required],

  extensionDate: [Validators.required],

  dateOfOvertime: [Validators.required],

  dateOfUndertime: [Validators.required],

  in: [Validators.required],

  out: [Validators.required],

  nameOfReliever: [Validators.required],

  requestedBy: [Validators.required],

  approvedBy: [Validators.required],

  receivedBy: [Validators.required],

  message: [Validators.required],
};
