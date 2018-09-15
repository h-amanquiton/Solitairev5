import { Component, OnInit } from '@angular/core';

import { CardCollectionService } from '../card-collection.service';
import { deckArr } from '../cardCollection';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  deck = deckArr;
  

  constructor(collectService: CardCollectionService) { }

  ngOnInit() {
    console.log(this.deck);
  }

}
