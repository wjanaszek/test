import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemApplicationService } from '@test/item/application';

@Component({
  selector: 'test-list-view',
  templateUrl: './list-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewComponent implements OnInit {
  readonly items$ = this.itemApplication.selectData();

  constructor(private readonly itemApplication: ItemApplicationService) {}

  ngOnInit(): void {
    this.itemApplication.fetchData();
  }
}
