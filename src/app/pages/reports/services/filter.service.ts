import { DateTime } from 'luxon';
import { IReport } from './../interfaces/report.interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private activeYearFilter: number;
  private activeTextFilter: string;

  constructor() {}

  setActiveYearFilter(yearFilter: number): void {
    this.activeYearFilter = yearFilter;
  }

  getActiveYearFilter(): number {
    return this.activeYearFilter;
  }

  setActiveTextFilter(textFilter: string): void {
    this.activeTextFilter = textFilter;
  }
}
