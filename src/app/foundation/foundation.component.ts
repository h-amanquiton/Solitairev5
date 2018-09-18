
import { Component, OnInit } from '@angular/core';

import { CardCollectionService } from '../card-collection.service';
import { foundationArr, tableauArr } from '../cardCollection';
import { MoveService } from '../move.service';
import { Card } from './../card';

import { currentCard, draggedCol, draggedRow, cardDraggable} from '../move.service'

let draggedCard: Card[]

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {

  foundation = foundationArr;

  constructor(
   private collectService: CardCollectionService,
   private moveservice: MoveService
    ) { }

  ngOnInit() {
  }  

}
