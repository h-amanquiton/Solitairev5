import { Injectable } from '@angular/core';
import { Deck } from './deck';
import { Card } from './card';
import { deckArr, tableau } from './cardCollection';

let numOfRanks = 13;
let numOfSuits = 4;

@Injectable({
  providedIn: 'root'
})
export class CardCollectionService {

  constructor() { }

  generateDeck() {
    for (let s = 0; s < numOfSuits; s++){
      for (let r = 0; r < numOfRanks; r++){
        let cardN = new Card(r, s, false);
        deckArr.push(cardN);
       // console.log(cardN.id);
      
      }
    }
  //  console.log(deck);
  console.log(deckArr);
  }

  distributeCards() {
    let numOfColumns = 7, numOfRows = 7;
    for (let row = 0; row < numOfRows; row++) {
      for (let col = 0;col < numOfColumns; col++) {
        if ( col < row ) {
          continue;
        }
        tableau[col].push(deckArr.pop());
        
      }
    }
  //  console.log(tableau);
  }
}
