import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemApplicationService } from './item-application.service';

@NgModule({
  imports: [CommonModule],
  providers: [ItemApplicationService],
})
export class ItemApplicationModule {}
