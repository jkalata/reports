import { DateTime } from 'luxon';
import { IReport } from './../interfaces/report.interfaces';
import { FilterService } from './../services/filter.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearFilter',
})
export class YearFilterPipe implements PipeTransform {
  constructor(private filterService: FilterService) {}
  transform(value: IReport[]): IReport[] {
    return value.filter(
      (report) =>
        DateTime.fromMillis(report.date).year >=
        this.filterService.getActiveYearFilter()
    );
  }
}
