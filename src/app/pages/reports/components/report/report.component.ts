import { DateTime } from 'luxon';
import { IReport, IFormattedDate } from './../../interfaces/report.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  @Input() report: IReport;

  private dateFormat = 'dd.MM.yyyy';
  private timeFormat = 'hh.mm';
  constructor() {}

  formattedDate: IFormattedDate;

  ngOnInit(): void {
    this.formattedDate = this.formatDate();
  }

  private formatDate(): IFormattedDate {
    const dateTime = DateTime.fromMillis(this.report.date);
    return {
      date: dateTime.toFormat(this.dateFormat),
      time: dateTime.toFormat(this.timeFormat),
    };
  }
}
