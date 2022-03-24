import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, ItemResource } from '@test/item/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemDto } from './item.dto';

@Injectable()
export class HttpItemResource implements ItemResource {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Item[]> {
    return this.http.get<ItemDto[]>('https://cobiro.s3-eu-west-1.amazonaws.com/json/prod/templates.json').pipe(
      // map((dtos))
    );
  }
}
