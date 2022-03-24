import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITEM_QUERY, ItemQuery, ItemResource, ItemStorage } from '@test/item/domain';
import { HttpItemResource } from './http-item.resource';
import { SubjectItemQuery } from './subject-item.query';
import { SubjectItemStorage } from './subject-item.storage';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class ItemInfrastructureModule {
  static forRoot(): ModuleWithProviders<ItemInfrastructureModule> {
    return {
      ngModule: ItemInfrastructureModule,
      providers: [
        {
          provide: ItemResource,
          useClass: HttpItemResource,
        },
        {
          provide: ItemStorage,
          useClass: SubjectItemStorage,
        },
        {
          provide: ITEM_QUERY,
          useClass: SubjectItemQuery,
        },
      ],
    };
  }
}
