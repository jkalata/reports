import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ReportsService } from './reports.service';
import * as data from 'src/assets/data.json';
describe('ReportsService', () => {
  let spectator: SpectatorService<ReportsService>;
  let service: ReportsService;

  const createService = createServiceFactory({
    service: ReportsService,
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns json data as Observable', () => {
    service.getReports().subscribe((response) => {
      expect(response).toEqual(data['default']);
    });
  });
});
