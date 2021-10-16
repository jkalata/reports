import { IReport } from './../interfaces/report.interfaces';
import * as data from 'src/assets/data.json';

export const reportListMock: IReport[] = data['default'] as IReport[];

export const expectedYearsMock = [
  2018, 2017, 2016, 2015, 2014, 2012, 2011, 2010,
];
