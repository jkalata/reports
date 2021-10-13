export interface IReport {
  date: number;
  category: 'Finansowe' | 'Roczne' | 'Bieżące';
  title: string;
  description: string;
  files: IFile[];
}

export interface IFile {
  filename: string;
  filesize: number;
}
