import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss']
})
export class FormRenderComponent implements OnInit {
  schema: any;
  refreshForm: EventEmitter<any> | undefined;
  @ViewChild('formioObj', { static: true }) formioObj: any;
  public preFilledData = {};
  public showCustomFormNav = true;
  private SCHEMA_API = './assets/formiodata/formschema.json';
  private DATA_API = './assets/formiodata/form-data.json';
  constructor(private readonly httpClient: HttpClient, private readonly formDataService: FormDataService){}

  ngOnInit(){
    this.httpClient.get(this.SCHEMA_API).subscribe(x => {
      this.schema = x;
      this.formDataService.createHeader(this.schema);
    });
  }

  onSubmit(event: any) {
    console.log(event.data)
  }

  addPrefilledData(event: any) {
    this.httpClient.get(this.DATA_API).subscribe(x => {
      this.preFilledData = x;
    });
  }

  toggleNav(event: any) {
    this.showCustomFormNav = !this.showCustomFormNav;
  }
}
