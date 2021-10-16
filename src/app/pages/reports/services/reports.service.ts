import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IReport } from '../interfaces/report.interfaces';
import * as data from 'src/assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor() {}

  getReports(): Observable<IReport[]> {
    console.log(data['default']);
    return of(data['default'] as IReport[]);
  }
}
