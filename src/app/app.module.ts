import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormioModule } from 'angular-formio';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { HttpClientModule } from '@angular/common/http';
import { FormRenderComponent } from './form-render/form-render.component';
import { FormioCustomControlModule } from './custom-controls/formio-custom-control.module';
import { FormNavHeaderComponent } from './form-nav-header/form-nav-header.component';

const routes: Routes = [
  {
    path: '',
    component: FormRenderComponent
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormRenderComponent,
    FormNavHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormioCustomControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
