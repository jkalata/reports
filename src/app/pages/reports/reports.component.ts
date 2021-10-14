import { ReportsService } from './services/reports.service';
import { IReport } from './interfaces/report.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  reports: IReport[];

  constructor(private reportsService: ReportsService) {
    this.getReports();
  }

  private getReports(): void {
    this.reportsService
      .getReports()
      .subscribe((response) => (this.reports = response));
  }
}
