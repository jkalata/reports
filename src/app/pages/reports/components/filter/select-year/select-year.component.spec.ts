import { expectedYearsMock } from './../../../mocks/reports.mocks';
import { FilterService } from './../../../services/filter.service';

import { SelectYearComponent } from './select-year.component';
import { Spectator, createComponentFactory, byRole } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';

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
});
