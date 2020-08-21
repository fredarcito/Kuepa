import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Daterangepicker } from 'ng2-daterangepicker';

import { HeaderReportComponent } from './header-report/header-report.component';
import { FooterReportComponent } from './footer-report/footer-report.component';
import { FilterReportComponent } from './filter-report/filter-report.component';
import { ListReportComponent } from './list-report/list-report.component';
import { PaginatorReportComponent } from './paginator-report/paginator-report.component';
import { ReportComponent } from './report.component';


//Routes

import { ReportRoutingModule } from './report-routing.module'




@NgModule({
  declarations: [HeaderReportComponent, FooterReportComponent, FilterReportComponent, ListReportComponent, PaginatorReportComponent, ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    Daterangepicker,

  ]
})
export class ReportModule { }
