import { Injector } from '@angular/core';
import {
  FormioCustomComponentInfo,
  registerCustomFormioComponent,
} from 'angular-formio';
import { LoanRangeComponent } from './loan-range.component';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'loanrangecontrol',
  selector: 'loan-range-control',
  title: 'Loan Range Control',
  group: 'basic',
  icon: 'fa fa-minus-square'
};

export function registerLoanRangeComponent(injector: Injector): void {
  registerCustomFormioComponent(
    COMPONENT_OPTIONS,
    LoanRangeComponent,
    injector
  );
}
