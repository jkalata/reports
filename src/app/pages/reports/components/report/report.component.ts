import { IReport } from './../../interfaces/report.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  @Input() report: IReport;
  constructor() {}

  ngOnInit(): void {}
}
