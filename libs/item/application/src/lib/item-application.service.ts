import { Inject, Injectable } from '@angular/core';
import { Item, ITEM_QUERY, ItemQuery, ItemResource, ItemStorage } from '@test/item/domain';
import { Observable, take } from 'rxjs';

@Injectable()
export class ItemApplicationService {
  constructor(
    @Inject(ITEM_QUERY) private readonly itemQuery: ItemQuery,
    private readonly itemResource: ItemResource,
    private readonly itemStorage: ItemStorage
  ) {}

  fetchData(): void {
    this.itemResource
      .getAll()
      .pipe(take(1))
      .subscribe((data) => this.itemStorage.setItems(data));
  }

  selectData(): Observable<Item[]> {
    return this.itemQuery.selectAll();
  }
}
