import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { IFile } from './../../interfaces/report.interfaces';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFooterComponent } from './report-footer.component';

describe('ReportFooterComponent', () => {
  let spectator: Spectator<ReportFooterComponent>;
  let component: ReportFooterComponent;
  const filesMock: IFile[] = [
    {
      filename: 'filename1',
      filesize: 123,
    },
    {
      filename: 'filename2',
      filesize: 234,
    },
  ];

  const createComponent = createComponentFactory({
    component: ReportFooterComponent,
  });
  beforeEach(() => {
    spectator = createComponent({
      props: {
        files: filesMock,
      },
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
