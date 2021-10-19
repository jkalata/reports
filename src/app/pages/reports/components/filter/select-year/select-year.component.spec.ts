import { expectedYearsMock } from './../../../mocks/reports.mocks';
import { FilterService } from './../../../services/filter.service';

import { SelectYearComponent } from './select-year.component';
import { Spectator, createComponentFactory, byRole } from '@ngneat/spectator';

describe('SelectYearComponent', () => {
  let component: SelectYearComponent;
  let spectator: Spectator<SelectYearComponent>;

  const filterServiceMock = jasmine.createSpyObj<FilterService>(
    'FIlterService',
    {
      getAvailableYears: expectedYearsMock,
      setActiveYearFilter: undefined,
    }
  );

  const createComponent = createComponentFactory({
    component: SelectYearComponent,
    providers: [{ provide: FilterService, useValue: filterServiceMock }],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders select options', () => {
    expect(spectator.queryAll(byRole('option'))).toHaveLength(
      expectedYearsMock.length
    );
  });

  it('changes year filter', () => {
    spectator.fixture.whenStable().then(() => {
      const year = '2010';
      component.changeYearFilter({ event: { target: year } });
      expect(
        spectator.inject(FilterService).setActiveYearFilter
      ).toHaveBeenCalledWith(Number(year));
    });
  });
});
