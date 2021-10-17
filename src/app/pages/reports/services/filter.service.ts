import { DateTime } from 'luxon';
import { IReport } from './../interfaces/report.interfaces';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private activeYearFilter: BehaviorSubject<number> = new BehaviorSubject(null);
  private activeTextFilter: BehaviorSubject<string> = new BehaviorSubject('');
  private activeTags: BehaviorSubject<Set<string>> = new BehaviorSubject(
    new Set()
  );
  private availableYears: number[];

  private availableTags: string[];

  setActiveYearFilter(yearFilter: number): void {
    this.activeYearFilter.next(yearFilter);
  }

  getActiveYearFilter(): Observable<number> {
    return this.activeYearFilter.asObservable();
  }

  setActiveTextFilter(textFilter: string): void {
    this.activeTextFilter.next(textFilter.toLowerCase());
  }

  getActiveTextFilter(): Observable<string> {
    return this.activeTextFilter.asObservable();
  }

  getAvailableYears(): number[] {
    return this.availableYears;
  }

  resetActiveTags(): void {
    this.activeTags.next(new Set());
  }

  addActiveTag(tag: string): void {
    this.activeTags.pipe(take(1)).subscribe((activeTags) => {
      activeTags.add(tag);
      this.activeTags.next(activeTags);
    });
  }

  removeActiveTag(tag: string): void {
    this.activeTags.pipe(take(1)).subscribe((activeTags) => {
      activeTags.delete(tag);
      this.activeTags.next(activeTags);
    });
  }

  getActiveTags(): Observable<string[]> {
    return this.activeTags.asObservable().pipe(map((set) => Array.from(set)));
  }

  getAvailableTags(): string[] {
    return this.availableTags;
  }

  calculateAvailableYears(reports: IReport[]): void {
    const yearsSet: Set<number> = new Set();
    reports.forEach((report) => {
      yearsSet.add(DateTime.fromMillis(report.date).year);
    });
    this.availableYears = Array.from(yearsSet).sort((a, b) => b - a);
  }

  calculateAvailableTags(reports: IReport[]): void {
    const tagSet: Set<string> = new Set();
    reports.forEach((report) => {
      tagSet.add(report.category);
    });
    this.availableTags = Array.from(tagSet).sort((a, b) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      if (a === b) {
        return 0;
      }
    });
  }
}
