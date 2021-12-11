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
  }

  updatePanel(index: number) {
    this.formioObj.formio.setPage(index);
    this.formDataService.updateMenuActive(index);
  }
}
