import { Injectable } from '@angular/core';

import { wasteArr, tableauArr, foundationArr, deckArr } from './cardCollection';
import { Card } from './card';

let draggedTargetId;
let cardFromTableau: boolean;
export let draggedRow; 
export let draggedCol; 
let dropId;
let dropRow;
let dropCol;
export let draggedCard: Card[];
export let cardDraggable: boolean;
let dropTarget: Card;
export let currentCard: Card;
let wasteTopCard: Card;
let numCol: number = 7;
let dropSuit;
    



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

  tabDrag(event) {
    
    draggedTargetId = event.target.id;
    draggedRow = document.getElementById(draggedTargetId).getAttribute('row-index');
    draggedCol = document.getElementById(draggedTargetId).getAttribute('col-index');
    currentCard = tableauArr[draggedCol][draggedRow];

     if (currentCard.faceUp) {
       cardDraggable = true;
       cardFromTableau = true;
      // console.log(currentCard.rank)
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
    dropCol = document.getElementById(dropId).getAttribute('col-index');
    if (!(tableauArr[dropCol].length === 0)) {
      dropRow = document.getElementById(dropId).getAttribute('row-index');
    }
    
    dropTarget = tableauArr[dropCol][dropRow];
    

    

  }

  drop(event) {

    if (cardFromTableau) {
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

    } else if (!cardFromTableau) {
      wasteTopCard = wasteArr[wasteArr.length - 1];
      if (dropTarget.rank - wasteTopCard.rank === 1) {
        if 
          ((dropTarget.cardIsRed && !wasteTopCard.cardIsRed) ||
          (!dropTarget.cardIsRed && wasteTopCard.cardIsRed)) {
            tableauArr[dropCol].push(wasteArr.pop());
          }
      }
    }

    
  }

  flipCards() {
    
    for (let c = 0; c < numCol; c++) {
      let lastIdx = tableauArr[c].length - 1;
      if (tableauArr[c].length === 0) {
        continue;
      }
      if (!tableauArr[c][lastIdx].faceUp) {
        tableauArr[c][lastIdx].faceUp = true;
      }
    }
  }

    //foundation methods

  initFoundationDrop(event) {
    if (cardFromTableau) {
      if (currentCard.rank === 0) {
        if (cardDraggable) {
          draggedCard = tableauArr[draggedCol].splice(draggedRow);
          console.log(draggedCard);
    
        }
        foundationArr[currentCard.suit].push(draggedCard.pop());
        this.flipCards();
        console.log(foundationArr);
      }
    } else if (!cardFromTableau) {
      
      if (!(wasteArr.length === 0)) {
        wasteTopCard = wasteArr[wasteArr.length-1];

        if (wasteTopCard.rank === 0) {
          foundationArr[wasteTopCard.suit].push(wasteArr.pop());
        }
      }
      
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

   drawCard(event) {
    if (deckArr.length === 0) {
      let wasteNum = wasteArr.length;
      for (let x = 0; x < wasteNum; x++) {
      deckArr.push(wasteArr.pop());
      deckArr[deckArr.length-1].faceUp = false;
      }
    } else {
      for (let i = 0; i < 3 ; i++) {
      
        wasteArr.push(deckArr.pop());
        wasteArr[wasteArr.length-1].faceUp = true;
      }
      console.log(wasteArr);
    }


    

   }

   // waste methods

  wasteDrag(event) {
      event.preventDefault();
      cardFromTableau = false;

    //  currentCard = wasteArr[draggedIdx];

    //  if (currentCard == wasteArr[wasteArr.length-1]) {
    //    cardDraggable = true;
    //  } else {
    //    cardDraggable = false;
    //  }
  }

  emptyColDrop(event) {
    let v = document.getElementById(event.target.id).getAttribute('colIdx');
    if (cardFromTableau) {
      if((currentCard.rank === 12) && (tableauArr[v].length === 0)) {
        if (cardDraggable) {
          draggedCard = tableauArr[draggedCol].splice(draggedRow);
        }
        
        tableauArr[v].push(draggedCard.pop());
        this.flipCards();
      }
    } else if (!cardFromTableau) {
      wasteTopCard = wasteArr[wasteArr.length-1];
      if ((wasteTopCard.rank === 12) && (tableauArr[v].length === 0)) {
        tableauArr[v].push(wasteArr.pop());
      }
    }
  }

  testDragOver(event) {
   // console.log(event.target);
   event.preventDefault();
  }

  foundationDrop(event) {
    let lastElem = foundationArr[dropSuit].length - 1;
    dropTarget = foundationArr[dropSuit][lastElem];
    if (cardFromTableau) {
      if (currentCard.rank - dropTarget.rank === 1) {
        if (currentCard.suit === dropTarget.suit) {
          if (cardDraggable) {
            draggedCard = tableauArr[draggedCol].splice(draggedRow);
          }
          foundationArr[dropTarget.suit].push(draggedCard.pop());
          this.flipCards();
        }
      }
    } else if (!cardFromTableau) {
      wasteTopCard = wasteArr[wasteArr.length-1];
      if (wasteTopCard.rank - dropTarget.rank === 1) {
        if (wasteTopCard.suit === dropTarget.suit) {
          foundationArr[dropTarget.suit].push(wasteArr.pop());
        }
      }
    }
  }

  fDragOver(event) {
    event.preventDefault();
    dropSuit = document.getElementById(event.target.id).getAttribute('suitVal');
    
  }

}
