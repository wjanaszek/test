import {
  createComponentFactory,
  mockProvider,
  Spectator,
  SpyObject,
} from '@ngneat/spectator/jest';
import { ItemApplicationService } from '@test/item/application';
import { of } from 'rxjs';
import { ListViewComponent } from './list-view.component';

const data = [{ id: 'test', image: 'test url' }];

const selectors = {
  item: '[data-test=item]',
  itemId: '[data-test=item-id]',
  itemImage: '[data-test=item-image]',
};

describe('ListViewComponent', () => {
  let spectator: Spectator<ListViewComponent>;
  let applicationService: SpyObject<ItemApplicationService>;

  const createComponent = createComponentFactory({
    component: ListViewComponent,
  });

  beforeEach(() => {
    spectator = createComponent({
      providers: [
        mockProvider(ItemApplicationService, {
          selectData: () => of(data),
          fetchData: jest.fn(),
        }),
      ],
    });

    applicationService = spectator.inject(ItemApplicationService, true);
  });

  it('fetches data', () => {
    spectator.component.ngOnInit();

    expect(applicationService.fetchData).toHaveBeenCalled();
  });

  it('displays item on the list', () => {
    spectator.detectComponentChanges();

    const items = spectator.queryAll(selectors.item);
    expect(items.length).toEqual(data.length);
    items.forEach((item) => expect(item).toBeTruthy());
  });

  it('displays id', () => {
    spectator.detectComponentChanges();

    expect(spectator.query(selectors.itemId)).toBeTruthy();
  });

  it('displays image', () => {
    spectator.detectComponentChanges();

    expect(spectator.query(selectors.itemImage)).toBeTruthy();
  });
});
