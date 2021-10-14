import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportComponent } from './components/report/report.component';
import { ReportsComponent } from './reports.component';

@NgModule({
  declarations: [
    SearchComponent,
    ReportListComponent,
    ReportComponent,
    ReportsComponent,
  ],
  imports: [CommonModule],
  exports: [ReportsComponent],
})
export class ReportsModule {}
