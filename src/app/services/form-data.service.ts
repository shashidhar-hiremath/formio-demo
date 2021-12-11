import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFromNavInfo } from '../model/form-nav.model';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  formioSchema = {};
  formNavData = new BehaviorSubject<IFromNavInfo[]>([]);
  formNavDetails: IFromNavInfo[] = [];
  constructor() {}

  createHeader(schema: any = {}) {
    const panels: IFromNavInfo[] = [];
    const components = schema.components;
    let panel = -1;

    for (const component of components) {
      if (component.properties.id) {
        panel++;
        panels[panel] = {
          state: component.properties.isActive ? 'active' : 'inactive',
          level: component.properties.level,
          title: component.properties.navLabel,
          parent: component.properties.parent,
          id: component.properties.id,
          show: true
        };
      }
    }
    this.formNavDetails = panels;
    this.formNavData.next(panels);
  }

  updateMenuActive(index: number) {
    this.formNavDetails = this.formNavDetails.map((x, i) => ({...x, state: (i === index ? 'active' : 'inactive')}))
    this.formNavData.next(this.formNavDetails);
  }

}
