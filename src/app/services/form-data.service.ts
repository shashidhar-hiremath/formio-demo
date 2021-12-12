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
  checkOnValueChange: {key: string, currentValue: any}[] = [];
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
          show: component.properties.show,
          anyCondition: component.properties.shouldShowOn ? JSON.parse(component.properties.shouldShowOn) : null
        };
        panels[panel].anyCondition && this.addValueCheckProper(panels[panel].anyCondition);
      }
    }
    this.formNavDetails = panels;
    this.formNavData.next(panels);
  }

  updateMenuActive(index: number) {
    this.formNavDetails = this.formNavDetails.map((x, i) => ({...x, state: (i === index ? 'active' : 'inactive')}))
    this.formNavData.next(this.formNavDetails);
  }

  addValueCheckProper(values: any[]) {
    values.forEach((value) => {
      if(!this.checkOnValueChange.find(x => x.key === value.key)) {
        this.checkOnValueChange.push({key: value.key, currentValue: null});
      }
    });
  }

  checkValueUpdateforMenu(form: any) {
    const keyChanged = form.changed.component.key;
    if (this.checkOnValueChange.find(x => x.key === keyChanged)) {
      const updatedValue = form.data[keyChanged];
      this.formNavDetails = this.formNavDetails.map((data) => {
        if (data?.anyCondition?.find(x => x.key === keyChanged)) {
          if(data.anyCondition[0].value === updatedValue) {
            data.show = true;
          } else {
            data.show = false;
          }
        }
        return {...data}
      });
    }
    this.formNavData.next(this.formNavDetails);
  }

}
