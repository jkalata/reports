import { SearchBarComponent } from './search-bar.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let spectator: Spectator<SearchBarComponent>;

  const createComponent = createComponentFactory({
    component: SearchBarComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
