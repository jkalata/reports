import { DateTime } from 'luxon';
import { FilterService } from './services/filter.service';
import { ReportsService } from './services/reports.service';
import { IReport } from './interfaces/report.interfaces';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, mergeMap, toArray } from 'rxjs/operators';
import { Subscription, of, from, forkJoin, merge, combineLatest } from 'rxjs';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnDestroy {
  filteredReports: IReport[];
  reports: IReport[];
  private subcriptions: Subscription[] = [];

  constructor(
    private reportsService: ReportsService,
    private filterService: FilterService
  ) {
    this.getReports();
  }

  private getReports(): void {
    this.reportsService
      .getReports()
      .pipe(map((reports) => reports.sort((a, b) => b.date - a.date)))
      .subscribe((response) => {
        this.initFilterServiceParams(response);
        this.reports = response;
        this.initFilterChangeListeners();
      });
  }

  private initFilterServiceParams(reports: IReport[]) {
    this.filterService.calculateAvailableYears(reports);
    this.filterService.setActiveYearFilter(
      this.filterService.getAvailableYears()[0]
    );
    this.filterService.calculateAvailableTags(reports);
    this.filterService.resetActiveTags();
  }

  private initFilterChangeListeners() {
    combineLatest([
      this.filterService.getActiveYearFilter(),
      this.filterService.getActiveTextFilter(),
      this.filterService.getActiveTags(),
    ]).subscribe((filterArray) => {
      console.log(filterArray);
      this.filterReports(filterArray);
    });
  }

  private filterReports([year, text, tags]: [number, string, string[]]): void {
    this.filteredReports = this.filterByYear(year, this.reports);
    this.filteredReports = this.filterByText(text, this.filteredReports);
    this.filteredReports = this.filterByTags(tags, this.filteredReports);
  }

  // private filterOnYearChange(): void {
  //   this.subcriptions.push(
  //     this.filterService.getActiveYearFilter().subscribe((yearFilter) => {
  //       this.filteredReports = this.filterByYear(yearFilter);
  //     })
  //   );
  // }

  private filterByYear(yearFilter: number, reports: IReport[]): IReport[] {
    return reports.filter(
      (report) => DateTime.fromMillis(report.date).year === yearFilter
    );
  }

  // private filterOnTextChange(): void {
  //   this.subcriptions.push(
  //     this.filterService.getActiveTextFilter().subscribe((textFilter) => {
  //       this.filteredReports = this.filterByText(textFilter);
  //     })
  //   );
  // }

  private filterByText(textFilter: string, reports: IReport[]): IReport[] {
    return reports.filter((report) =>
      this.textFilterPredicate(report, textFilter)
    );
  }

  private textFilterPredicate(report: IReport, textFilter: string): boolean {
    return (
      report.description.toLowerCase().includes(textFilter) ||
      report.title.toLowerCase().includes(textFilter)
    );
  }

  private filterByTags(tags: string[], reports: IReport[]): IReport[] {
    console.log(tags);
    if (tags.length === 0) {
      return reports;
    } else {
      return reports.filter((report) =>
        tags.some((tag) => report.category === tag)
      );
    }
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
