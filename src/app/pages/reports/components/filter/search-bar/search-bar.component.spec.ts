import { FilterService } from './../../../services/filter.service';
import { MockProvider } from 'ng-mocks';
import { SearchBarComponent } from './search-bar.component';
import {
  Spectator,
  createComponentFactory,
  byRole,
  byTestId,
} from '@ngneat/spectator';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let spectator: Spectator<SearchBarComponent>;

  const createComponent = createComponentFactory({
    component: SearchBarComponent,
    providers: [MockProvider(FilterService)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changes text filter', () => {
    const spy = spyOn(spectator.inject(FilterService), 'setActiveTextFilter');
    spectator.typeInElement('text filter', byTestId('input'));
    spectator.detectComponentChanges();
    spectator.click(byRole('button'));
    spectator.detectChanges();
    expect(spy).toHaveBeenCalledWith(component.textFilter);
  });
});
