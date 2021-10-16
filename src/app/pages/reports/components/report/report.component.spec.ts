import { ReportFooterComponent } from './../report-footer/report-footer.component';
import { MockComponents } from 'ng-mocks';
import { reportListMock } from './../../mocks/reports.mocks';
import { ReportComponent } from './report.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let spectator: Spectator<ReportComponent>;

  const createComponent = createComponentFactory({
    component: ReportComponent,
    declarations: [MockComponents(ReportFooterComponent)],
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        report: reportListMock[0],
      },
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders ReportFooterComponent', () => {
    expect(spectator.query(ReportFooterComponent)).toBeTruthy();
  });

  it('passes inputs to  ReportFooterComponent', () => {
    expect(spectator.query(ReportFooterComponent).files).toEqual(
      component.report.files
    );
  });
});
