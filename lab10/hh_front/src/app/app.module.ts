import { bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { provideRouter } from '@angular/router';
import {routes} from "./app.routes";
import { importProvidersFrom } from '@angular/core';
import { CompanyComponent } from './company/company.component';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      importProvidersFrom(BrowserModule, FormsModule, HttpClientModule),
    ],
  }).catch(err => console.error(err));
  
export class AppModule { }