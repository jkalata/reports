import { TagsComponent } from './components/filter/tags/tags.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportComponent } from './components/report/report.component';
import { ReportsComponent } from './reports.component';
import { SearchBarComponent } from './components/filter/search-bar/search-bar.component';
import { ReportFooterComponent } from './components/report-footer/report-footer.component';
import { SelectYearComponent } from './components/filter/select-year/select-year.component';
import { TagComponent } from './components/filter/tags/tag/tag.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterComponent,
    ReportListComponent,
    ReportComponent,
    ReportsComponent,
    SelectYearComponent,
    SearchBarComponent,
    ReportFooterComponent,
    TagsComponent,
    TagComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [ReportsComponent],
})
export class ReportsModule {}
