import { Item } from '@test/item/domain';
import { Observable } from 'rxjs';

export abstract class ItemQuery {
  abstract selectAll(): Observable<Item[]>;
}
