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
  private SCHEMA_API = './assets/formiodata/formschema.json';
  constructor(private readonly httpClient: HttpClient, private readonly formDataService: FormDataService){}

  ngOnInit(){
    this.httpClient.get(this.SCHEMA_API).subscribe(x => {
      this.schema = x;
      this.formDataService.createHeader(this.schema);
    })
  }

}
