import { IReport } from './../../interfaces/report.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent {
  @Input() reports: IReport[];
}
