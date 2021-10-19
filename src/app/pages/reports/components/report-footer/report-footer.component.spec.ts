import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';
import { IFile } from './../../interfaces/report.interfaces';
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
      filesize: 2345,
    },
    {
      filename: 'filename3',
      filesize: 2345123,
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

  it('gets filesize in KB', () => {
    const filesize = filesMock[0].filesize;
    expect(component.getFileSize(filesize)).toBe(`${filesize}kB`);
  });

  it('gets filesize in MB', () => {
    const filesize = filesMock[1].filesize;
    expect(component.getFileSize(filesize)).toBe(`${filesize / 1000}MB`);
  });

  it('gets filesize in GB', () => {
    const filesize = filesMock[2].filesize;
    expect(component.getFileSize(filesize)).toBe(`${filesize / 1_000_000}GB`);
  });

  it('renders accordion with n files when clicked', () => {
    spectator.click(byTestId('accordion-trigger'));

    expect(spectator.queryAll(byTestId('file'))).toHaveLength(filesMock.length);
  });
});
