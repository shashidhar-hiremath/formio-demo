import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  schema: any;
  @ViewChild('formioObj', { static: true }) formioObj: any;
  @ViewChild('data', { static: true }) data: any;
  private SCHEMA_API = './assets/formiodata/formschema.json';

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.schema = {};
    this.httpClient.get(this.SCHEMA_API).subscribe(x => {
      this.schema = x;
    })
   
    //this.schema = {};
  }

  copySelectedClip(event: any): void {
    const copyText = this.data.nativeElement;
    copyText.select();
    copyText.setSelectionRange(0, 999999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand('copy');
    alert('Copied');
  }

}
