import { Injectable } from '@angular/core';
import { Item, ItemQuery, ItemStorage } from '@test/item/domain';
import { Observable } from 'rxjs';

@Injectable()
export class SubjectItemQuery implements ItemQuery {
  constructor(private readonly storage: ItemStorage) {}

  selectAll(): Observable<Item[]> {
    return this.storage.items$;
  }
}
