import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFromNavInfo } from '../model/form-nav.model';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-form-nav-header',
  templateUrl: './form-nav-header.component.html',
  styleUrls: ['./form-nav-header.component.scss']
})
export class FormNavHeaderComponent implements OnInit {
  @Input() formioObj: any;
  formHeaderDetails$: Observable<IFromNavInfo[]> = this.formDataService.formNavData;  
  constructor(private readonly formDataService: FormDataService) { }

  ngOnInit(): void {
    this.formioObj.change.subscribe((formData: any) => {
      if (formData?.changed && formData?.changed?.value !== null) {
        this.checkUpdatedValue(formData);
      }
    });

    this.formioObj.nextPage.subscribe((event: any) => {
      const index = event.page;
      if( this.formioObj.formio.components.length <= 3 && index === 2) {
        this.formDataService.updateMenuActive(4);
      } else {
        this.formDataService.updateMenuActive(index);
      }
    });

    this.formioObj.prevPage.subscribe((event: any) => {
      const index = event.page;
      this.formDataService.updateMenuActive(index);
    });
  }

  updatePanel(index: number) {
    this.updateNavMenuFocus(index);
  }

  updateNavMenuFocus(index: number) {
    if( this.formioObj.formio.components.length <= 3 && index === 4) {
      this.formioObj.formio.setPage(2);
    } else {
      this.formioObj.formio.setPage(index);
    }
    this.formDataService.updateMenuActive(index);
  }

  checkUpdatedValue(formData: any): void {
    this.formDataService.checkValueUpdateforMenu(formData);
  }
}
