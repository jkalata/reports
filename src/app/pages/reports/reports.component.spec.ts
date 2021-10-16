import { reportListMock } from './mocks/reports.mocks';
import { of } from 'rxjs';
import { ReportsService } from './services/reports.service';
import { IReport } from './interfaces/report.interfaces';
import { ReportListComponent } from './components/report-list/report-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { ReportsComponent } from './reports.component';
import { MockComponents } from 'ng-mocks';

describe('ReportsComponent', () => {
  let spectator: Spectator<ReportsComponent>;
  let component: ReportsComponent;

  let reportsServiceMock = jasmine.createSpyObj<ReportsService>(
    'ReportsService',
    {
      getReports: of(reportListMock),
    }
  );

  const createComponent = createComponentFactory({
    component: ReportsComponent,
    declarations: [MockComponents(FilterComponent, ReportListComponent)],
    providers: [{ provide: ReportsService, useValue: reportsServiceMock }],
  });
  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('creates FilterComponent', () => {
    expect(spectator.query(FilterComponent)).toBeTruthy();
  });

  it('passes inputs to FilterComponent', () => {
    expect(spectator.query(FilterComponent).reports).toEqual(component.reports);
  });

  it('creates ReportListComponent', () => {
    expect(spectator.query(ReportListComponent)).toBeTruthy();
  });

  it('passes inputs to ReportListComponent', () => {
    expect(spectator.query(ReportListComponent).reports).toEqual(
      component.reports
    );
  });

  it('gets reports from service and stores them into value', () => {
    component['getReports']();
    expect(component.reports).toEqual(reportListMock);
  });
});
