import { reportListMock } from './../../mocks/reports.mocks';
import { ReportListComponent } from './report-list.component';
import { ReportComponent } from './../report/report.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';

describe('ReportsComponent', () => {
  let spectator: Spectator<ReportListComponent>;
  let component: ReportListComponent;

  const createComponent = createComponentFactory({
    component: ReportListComponent,
    declarations: [MockComponent(ReportComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.setInput({ reports: reportListMock });
    spectator.detectComponentChanges();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('creates ReportComponent times number of reports', () => {
    expect(spectator.queryAll(ReportComponent)).toHaveLength(
      component.reports.length
    );
  });

  it('passes inputs to ReportComponent', () => {
    expect(spectator.queryAll(ReportComponent)[0].report).toEqual(
      component.reports[0]
    );
  });
});
