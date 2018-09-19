import { Injectable } from '@angular/core';
import { Card } from './card';
import { deckArr, tableauArr } from './cardCollection';

let numOfRanks = 13;
let numOfSuits = 4;
let numOfColumns = 7, numOfRows = 7;


@Injectable({
  providedIn: 'root'
})
export class CardCollectionService {

  constructor() { }

  generateDeck() {
    for (let s = 0; s < numOfSuits; s++){
      for (let r = 0; r < numOfRanks; r++){
        if (s === 2 || s === 3 ) {
          let cardN = new Card(r, s, false, true);
          deckArr.push(cardN);
        } else {
          let cardN = new Card(r, s, false, false);
          deckArr.push(cardN);
        }
        
       // console.log(cardN.id);
      
      }
    }
  //  console.log(deck);
 // console.log(deckArr);
  }

  distributeCards() {
   
    for (let row = 0; row < numOfRows; row++) {
      for (let col = 0;col < numOfColumns; col++) {
        if ( col < row ) {
          continue;
        }
        if (col === row ) {
          let lastElement = deckArr.length - 1;
          deckArr[lastElement].faceUp = true;
        }
        tableauArr[col].push(deckArr.pop());
        
      }
    }
  //  console.log(tableauArr);
  }

  shuffleDeck() {
    let deckLength = deckArr.length;
    while (deckLength--) {
      let j = Math.floor(Math.random()*(deckLength+1));
      let temp = deckArr[deckLength];
      deckArr[deckLength] = deckArr[j];
      deckArr[j] = temp; 
    }
  }

}
