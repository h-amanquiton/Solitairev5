import { MoveService } from './move.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardCollectionService } from './card-collection.service';
import { DeckComponent } from './deck/deck.component';
import { TableauComponent } from './tableau/tableau.component';
import { FoundationComponent } from './foundation/foundation.component';
import { WasteComponent } from './waste/waste.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    TableauComponent,
    FoundationComponent,
    WasteComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CardCollectionService,
    MoveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
