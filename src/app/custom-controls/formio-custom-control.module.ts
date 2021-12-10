import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormioModule } from 'angular-formio';
import { LoanRangeComponent } from './loan-range/loan-range.component';
import { registerLoanRangeComponent } from './loan-range/laon-range.formio';

@NgModule({
  declarations: [
    LoanRangeComponent
  ],
  imports: [FormsModule, CommonModule, FormioModule],
  exports: [FormioModule],
})
export class FormioCustomControlModule {
  constructor(injector: Injector) {
    registerLoanRangeComponent(injector);
  }
}
