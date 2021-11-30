import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';

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
  constructor(private readonly httpClient: HttpClient){}

  ngOnInit(){
    this.httpClient.get(this.SCHEMA_API).subscribe(x => {
      this.schema = x;
    })
  }

}
