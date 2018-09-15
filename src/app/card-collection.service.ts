import { Injectable } from '@angular/core';
import { Deck } from './deck';
import { Card } from './card';
import { deck, tableau } from './cardCollection';

let numOfRanks = 13;
let numOfSuits = 4;

@Injectable({
  providedIn: 'root'
})
export class CardCollectionService {
  newDeck: Deck = new Deck;

  constructor() { }

  generateDeck() {
    for (let s = 0; s < numOfSuits; s++){
      for (let r = 0; r < numOfRanks; r++){
        let cardN = new Card(r,s);
        deck.push(cardN);
      }
    }
  //  console.log(deck);
  }

  distributeCards() {
    let numOfColumns = 7, numOfRows = 7;
    for (let row = 0; row < numOfRows; row++) {
      for (let col = 0;col < numOfColumns; col++) {
        if ( col < row ) {
          continue;
        }
        tableau[col].push(deck.pop());
        
      }
    }
    console.log(tableau);
  }
}
