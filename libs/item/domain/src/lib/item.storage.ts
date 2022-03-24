import { Item } from '@test/item/domain';
import { Observable } from 'rxjs';

export abstract class ItemStorage {
  abstract setItems(items: Item[]): void;

  abstract items$: Observable<Item[]>;
}
