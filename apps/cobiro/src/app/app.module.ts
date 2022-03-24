import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ItemViewModule } from '@test/item/view';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ItemViewModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
