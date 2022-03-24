import { Injectable } from '@angular/core';
import { Item, ItemStorage } from '@test/item/domain';
import { Subject } from 'rxjs';

@Injectable()
export class SubjectItemStorage implements ItemStorage {
  items$ = new Subject<Item[]>();

  setItems(items: Item[]): void {
    this.items$.next(items);
  }
}
