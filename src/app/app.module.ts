import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CovidserviceService} from './covidservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {MatTableExporterModule} from 'mat-table-exporter'
import {NgForm,FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { ViewcaseComponent } from './viewcase/viewcase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ViewcaseComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,
    AppRoutingModule,HttpClientModule,FormsModule,MatTableExporterModule, BrowserAnimationsModule
  ],
  providers: [CovidserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
