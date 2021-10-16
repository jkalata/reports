import { SearchBarComponent } from './../search-bar/search-bar.component';
import { reportListMock, expectedYearsMock } from '../../mocks/reports.mocks';
import { MockComponent, MockComponents } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { FilterComponent } from './filter.component';
import { SelectYearComponent } from '../select-year/select-year.component';

describe('SearchComponent', () => {
  let component: FilterComponent;
  let spectator: Spectator<FilterComponent>;

  const createComponent = createComponentFactory({
    component: FilterComponent,
    declarations: [MockComponents(SelectYearComponent, SearchBarComponent)],
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        reports: reportListMock,
      },
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders SelectYearComponent', () => {
    expect(spectator.query(SelectYearComponent)).toBeTruthy();
  });

  it('passes inputs to SelectYearComponent', () => {
    expect(spectator.query(SelectYearComponent).years).toEqual(
      expectedYearsMock
    );
  });

  it('renders SearchBarComponent', () => {
    expect(spectator.query(SearchBarComponent)).toBeTruthy();
  });
});
