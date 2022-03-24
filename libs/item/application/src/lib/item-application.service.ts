import { Injectable } from '@angular/core';
import { Item, ItemQuery, ItemResource, ItemStorage } from '@test/item/domain';
import { Observable } from 'rxjs';

@Injectable()
export class ItemApplicationService {
  constructor(
    private readonly itemQuery: ItemQuery,
    private readonly itemResource: ItemResource,
    private readonly itemStorage: ItemStorage
  ) {}

  fetchData(): void {
    this.itemResource
      .getAll()
      .subscribe((data) => this.itemStorage.setItems(data));
  }

  selectData(): Observable<Item[]> {
    return this.itemQuery.selectAll();
  }
}
