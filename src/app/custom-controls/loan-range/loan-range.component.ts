import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormioCustomComponent } from 'angular-formio';

@Component({
  selector: 'app-loan-range',
  templateUrl: './loan-range.component.html',
  styleUrls: ['./loan-range.component.scss']
})
export class LoanRangeComponent implements OnInit, OnChanges, OnDestroy,
FormioCustomComponent<number> {

  @Input() value: number = 0;
  @Input() placeholder: string = '';

  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<number>();

  @Input() maxLoan: number = 100;
  @Input() minLoan: number = 1;

  rangeValue: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.updateValue(this.value);
  }

  changeValue(event: any) {

  }

  updateValue(value: number): void {
    this.rangeValue = value;
    this.value = value;
    this.valueChange.emit(this.value);
  }

  ngOnDestroy() {

  }

}
