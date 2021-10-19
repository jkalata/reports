import { IFile } from './../../interfaces/report.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-report-footer',
  templateUrl: './report-footer.component.html',
  styleUrls: ['./report-footer.component.scss'],
})
export class ReportFooterComponent {
  @Input() files: IFile[];

  getFileSize(filesize: number): string {
    if (filesize < 1000) {
      return `${filesize}kB`;
    } else if (filesize >= 1000 && filesize < 1000000) {
      return `${filesize / 1000}MB`;
    } else if (filesize >= 1000000) {
      return `${filesize / 1_000_000}GB`;
    }
  }
}
