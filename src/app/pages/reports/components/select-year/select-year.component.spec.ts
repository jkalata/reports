import { expectedYearsMock } from './../../mocks/reports.mocks';
import { SelectYearComponent } from './select-year.component';
import {
  Spectator,
  createComponentFactory,
  byRole,
  byTestId,
} from '@ngneat/spectator';
import { By } from '@angular/platform-browser';

describe('SelectYearComponent', () => {
  let component: SelectYearComponent;
  let spectator: Spectator<SelectYearComponent>;

  const createComponent = createComponentFactory({
    component: SelectYearComponent,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        years: expectedYearsMock,
      },
    });
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
