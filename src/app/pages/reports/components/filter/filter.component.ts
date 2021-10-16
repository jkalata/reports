import { IReport } from '../../interfaces/report.interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() reports: IReport[];

  years: number[];

  ngOnInit() {
    this.years = this.createYearsSet();
  }

  private createYearsSet(): number[] {
    const yearsSet: Set<number> = new Set();
    this.reports.forEach((report) => {
      yearsSet.add(DateTime.fromMillis(report.date).year);
    });
    return Array.from(yearsSet).sort((a, b) => b - a);
  }
}
