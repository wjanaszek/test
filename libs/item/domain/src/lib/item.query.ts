import { InjectionToken } from '@angular/core';
import { Item } from '@test/item/domain';
import { Observable } from 'rxjs';

export const ITEM_QUERY = new InjectionToken<ItemQuery>('item query');

export interface ItemQuery {
  selectAll(): Observable<Item[]>;
}
