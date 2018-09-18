import { Component, OnInit } from '@angular/core';

import { CardCollectionService } from '../card-collection.service';
import { tableauArr } from '../cardCollection';
import { Card } from '../card';
import { MoveService } from '../move.service';

let draggedTargetId;
let draggedRow;
let draggedCol;
let dropZoneId;
let dropRow;
let dropCol;
let draggedCard: Card[];
let dragging: boolean = false;



@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})



export class TableauComponent implements OnInit {

  tableau = tableauArr;


  constructor(
    private collectService: CardCollectionService,
    private moveservice: MoveService
    ) { }

  ngOnInit() {
   
    
  }

}




