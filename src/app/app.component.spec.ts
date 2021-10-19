import { ReportsComponent } from './pages/reports/reports.component';
import { HeaderComponent } from './components/header/header.component';
import { MockComponents } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockComponents(HeaderComponent, ReportsComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('creates HeaderComponent', () => {
    expect(spectator.query(HeaderComponent)).toBeTruthy();
  });

  it('creates ReportsComponent', () => {
    expect(spectator.query(ReportsComponent)).toBeTruthy();
  });
});
