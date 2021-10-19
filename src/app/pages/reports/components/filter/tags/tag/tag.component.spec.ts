import { of } from 'rxjs';
import { FilterService } from './../../../../services/filter.service';
import { TagComponent } from './tag.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('TagComponent', () => {
  let component: TagComponent;
  let spectator: Spectator<TagComponent>;
  const tagList = ['tag1', 'tag2'];

  const filterServiceMock = jasmine.createSpyObj<FilterService>(
    'FilterService',
    {
      getAvailableTags: tagList,
      getActiveTags: of([tagList[0]]),
      removeActiveTag: undefined,
      resetActiveTags: undefined,
    }
  );

  const createComponent = createComponentFactory({
    component: TagComponent,
    providers: [{ provide: FilterService, useValue: filterServiceMock }],
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        tag: tagList[0],
      },
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('marks tag as active', () => {
    expect(component['isActive']([tagList[0]])).toBe(true);
  });
});
