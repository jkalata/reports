import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IReport } from '../interfaces/report.interfaces';
import * as data from 'src/assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  getReports(): Observable<IReport[]> {
    return of(data['default'] as IReport[]);
  }
}
