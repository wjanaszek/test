import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemApplicationModule } from '@test/item/application';
import { ItemInfrastructureModule } from '@test/item/infrastructure';
import { ListViewComponent } from './list-view.component';

@NgModule({
  imports: [
    CommonModule,
    ItemApplicationModule,
    ItemInfrastructureModule.forRoot(),
  ],
  declarations: [ListViewComponent],
  exports: [ListViewComponent],
})
export class ItemViewModule {}
