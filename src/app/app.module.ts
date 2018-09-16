import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardCollectionService } from './card-collection.service';
import { DeckComponent } from './deck/deck.component';
import { TableauComponent } from './tableau/tableau.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardCollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
