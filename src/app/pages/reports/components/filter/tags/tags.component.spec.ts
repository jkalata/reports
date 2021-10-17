import { TagComponent } from './tag/tag.component';
import { MockComponent } from 'ng-mocks';
import { TagsComponent } from './tags.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { FilterService } from '../../../services/filter.service';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let spectator: Spectator<TagsComponent>;
  const tagList = ['tag1', 'tag2'];

  const filterServiceMock = jasmine.createSpyObj<FilterService>(
    'FilterService',
    {
      getAvailableTags: tagList,
    }
  );

  const createComponent = createComponentFactory({
    component: TagsComponent,
    declarations: [MockComponent(TagComponent)],
    providers: [{ provide: FilterService, useValue: filterServiceMock }],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders TagComponent n times', () => {
    const n = tagList.length + 1;

    expect(spectator.queryAll(TagComponent)).toHaveLength(n);
  });

  it('passes inputs to TagComponent', () => {
    expect(spectator.queryAll(TagComponent)[0].tag).toEqual('Wszystkie');
    expect(spectator.queryAll(TagComponent)[1].tag).toEqual(tagList[0]);
  });
});
