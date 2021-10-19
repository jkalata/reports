import { TagsComponent } from './tags/tags.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MockComponents } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { FilterComponent } from './filter.component';
import { SelectYearComponent } from './select-year/select-year.component';

describe('SearchComponent', () => {
  let component: FilterComponent;
  let spectator: Spectator<FilterComponent>;

  const createComponent = createComponentFactory({
    component: FilterComponent,
    declarations: [
      MockComponents(SelectYearComponent, SearchBarComponent, TagsComponent),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders SelectYearComponent', () => {
    expect(spectator.query(SelectYearComponent)).toBeTruthy();
  });

  it('renders SearchBarComponent', () => {
    expect(spectator.query(SearchBarComponent)).toBeTruthy();
  });

  it('renders TagsComponent', () => {
    expect(spectator.query(TagsComponent)).toBeTruthy();
  });
});
