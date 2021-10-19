import { DateTime } from 'luxon';
import { take } from 'rxjs/operators';
import { IReport } from './../interfaces/report.interfaces';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';
import { FilterService } from './filter.service';

describe('FilterService', () => {
  let spectator: SpectatorService<FilterService>;
  let service: FilterService;

  const reportList: IReport[] = [
    {
      category: 'category1',
      date: DateTime.now().toMillis(),
      description: 'description',
      files: [],
      title: 'Title',
    },
    {
      category: 'category2',
      date: DateTime.now().minus({ years: 1 }).toMillis(),
      description: 'description',
      files: [],
      title: 'Title',
    },
  ];
  const createService = createServiceFactory({
    service: FilterService,
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('creates service', () => {
    expect(service).toBeTruthy();
  });

  describe('adding and removing tags', () => {
    const tagList = ['tag1', 'tag2'];

    beforeEach(() => {
      service.addActiveTag(tagList[0]);
    });

    it('adds tag to list', () => {
      service.addActiveTag(tagList[1]);

      service
        .getActiveTags()
        .pipe(take(1))
        .subscribe((activeTags) => {
          expect(activeTags).toEqual(tagList);
        });
    });

    it('removes tag from list', () => {
      service.removeActiveTag(tagList[1]);
      service
        .getActiveTags()
        .pipe(take(1))
        .subscribe((activeTags) => {
          expect(activeTags).toEqual([tagList[0]]);
        });
    });

    it('resets tags', () => {
      service.resetActiveTags();
      service
        .getActiveTags()
        .pipe(take(1))
        .subscribe((activeTags) => {
          expect(activeTags).toEqual([]);
        });
    });
  });

  it('calculates available years from report list', () => {
    const expectedOutput = [
      DateTime.now().year,
      DateTime.now().minus({ years: 1 }).year,
    ].sort((a, b) => b - a);

    service.calculateAvailableYears(reportList);

    expect(service.getAvailableYears()).toEqual(expectedOutput);
  });

  it('creates available tags array from reports', () => {
    const expectedOutput = reportList
      .map((report) => report.category)
      .sort((a, b) => {
        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        if ((a = b)) {
          return 1;
        }
      });
    service.calculateAvailableTags(reportList);
    expect(service.getAvailableTags()).toEqual(expectedOutput);
  });
});
