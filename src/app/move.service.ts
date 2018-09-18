import { Injectable } from '@angular/core';

import { wasteArr, tableauArr, foundationArr } from './cardCollection';
import { Card } from './card';

let draggedTargetId;
let draggedRow; 
let draggedCol; 
let dropId;
let dropRow;
let dropCol;
let draggedCard: Card[];
let dragging: boolean;
let dragCardIsRed;
let dropCardIsRed;
let dropIsLegal: boolean;
let cardDraggable: boolean;

@Injectable({
  providedIn: 'root'
})

export class MoveService {


  constructor() { }

  click(event) {
    //console.log(tableauArr[draggedRow][draggedCol])
    draggedTargetId = event.target.id;
    
    draggedRow = document.getElementById(draggedTargetId).getAttribute('row-index');
    draggedCol = document.getElementById(draggedTargetId).getAttribute('col-index');
    console.log(tableauArr[draggedCol][draggedRow]);
    //console.log(tableauArr[draggedRow][draggedCol].faceUp);
  


  }

  drag(event) {
    
    draggedTargetId = event.target.id;
    draggedRow = document.getElementById(draggedTargetId).getAttribute('row-index');
    draggedCol = document.getElementById(draggedTargetId).getAttribute('col-index');

     if (tableauArr[draggedCol][draggedRow].faceUp) {
       cardDraggable = true;
    } else {
      cardDraggable = false;
    } 

    if (cardDraggable) {
      draggedCard = tableauArr[draggedCol].splice(draggedRow);
      console.log(draggedCard);

    }
  }

  dragOver(event) {

    event.preventDefault(); 
    dropId = event.target.id;
    dropRow = document.getElementById(dropId).getAttribute('row-index');
    dropCol = document.getElementById(dropId).getAttribute('col-index');
    

  }

  drop(event) {
    
    tableauArr[dropCol].push(draggedCard.pop());
  }
}
