import { Observable } from 'rxjs';
import { Item } from './item.model';

export abstract class ItemResource {
  abstract getAll(): Observable<Item[]>;
}
