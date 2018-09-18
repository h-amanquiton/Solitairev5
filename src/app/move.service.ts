import { Injectable } from '@angular/core';

import { wasteArr, tableauArr, foundationArr } from './cardCollection';
import { Card } from './card';

let draggedTargetId;
export let draggedRow; 
export let draggedCol; 
let dropId;
let dropRow;
let dropCol;
export let draggedCard: Card[];
let dropIsLegal: boolean;
export let cardDraggable: boolean;
let dropTarget: Card;
export let currentCard: Card;

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
    currentCard = tableauArr[draggedCol][draggedRow];

     if (currentCard.faceUp) {
       cardDraggable = true;
       console.log(currentCard.rank)
    } else {
      cardDraggable = false;
    } 

    // if (cardDraggable) {
    //   draggedCard = tableauArr[draggedCol].splice(draggedRow);
    //   console.log(draggedCard);

    // }
  }

  dragOver(event) {

    event.preventDefault(); 
    dropId = event.target.id;
    dropRow = document.getElementById(dropId).getAttribute('row-index');
    dropCol = document.getElementById(dropId).getAttribute('col-index');
    dropTarget = tableauArr[dropCol][dropRow];
    

    

  }

  drop(event) {

    if (dropTarget.rank - currentCard.rank === 1) {
      if 
      ((dropTarget.cardIsRed && !currentCard.cardIsRed) ||
       (!dropTarget.cardIsRed && currentCard.cardIsRed))
      {
        if (cardDraggable) {
          draggedCard = tableauArr[draggedCol].splice(draggedRow);
          console.log(draggedCard);
    
        }

        tableauArr[dropCol].push(draggedCard.pop());
        this.flipCards();
      }
    } 
  }

  flipCards() {
    let numCol = 7;
    
    for (let c = 0; c < numCol; c++) {
      let lastIdx = tableauArr[c].length - 1;
      if (!tableauArr[c][lastIdx].faceUp) {
        tableauArr[c][lastIdx].faceUp = true;
      }
    }
  }

  foundationDrop(event) {
    if (currentCard.rank === 0){
      if (cardDraggable) {
        draggedCard = tableauArr[draggedCol].splice(draggedRow);
        console.log(draggedCard);
  
      }
      foundationArr[currentCard.suit].push(draggedCard.pop());
      this.flipCards();
      console.log(foundationArr);
    }
  }

   foundDragOver(event) {
     event.preventDefault(); 
    // let fDropId = event.target.id;
    // console.log(fDropId);
   }

   fclick(event) {
    console.log(event.target.id);
   }
}
