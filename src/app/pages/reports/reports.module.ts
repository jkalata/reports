import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportComponent } from './components/report/report.component';
import { ReportsComponent } from './reports.component';
import { SelectYearComponent } from './components/select-year/select-year.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ReportFooterComponent } from './components/report-footer/report-footer.component';
import { YearFilterPipe } from './pipes/year-filter.pipe';

@NgModule({
  declarations: [
    FilterComponent,
    ReportListComponent,
    ReportComponent,
    ReportsComponent,
    SelectYearComponent,
    SearchBarComponent,
    CategoriesComponent,
    ReportFooterComponent,
    YearFilterPipe,
  ],
  imports: [CommonModule],
  exports: [ReportsComponent],
})
export class ReportsModule {}
