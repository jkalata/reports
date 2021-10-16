export interface IReport {
  date: number;
  // category: 'Finansowe' | 'Roczne' | 'Bieżące';
  category: string;
  title: string;
  description: string;
  files: IFile[];
}

export interface IFile {
  filename: string;
  filesize: number;
}

export interface IFormattedDate {
  date: string;
  time: string;
}
