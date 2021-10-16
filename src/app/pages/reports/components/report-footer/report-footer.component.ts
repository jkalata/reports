import { IFile } from './../../interfaces/report.interfaces';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-report-footer',
  templateUrl: './report-footer.component.html',
  styleUrls: ['./report-footer.component.scss'],
})
export class ReportFooterComponent {
  @Input() files: IFile[];

  getFileSize(file: IFile): string {
    if (file.filesize < 1000) {
      return `(${file.filesize}kB)`;
    } else if (file.filesize >= 1000 && file.filesize < 1000000) {
      return `(${file.filesize}MB)`;
    }
  }
}
