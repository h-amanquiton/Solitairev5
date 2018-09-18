
import { Component, OnInit } from '@angular/core';

import { CardCollectionService } from '../card-collection.service';
import { MoveService } from './../move.service';
import { deckArr } from '../cardCollection';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  deck = deckArr;
  

  constructor(
    private collectService: CardCollectionService,
    private moveservice: MoveService
    ) { }

  ngOnInit() {
    
  }

}
