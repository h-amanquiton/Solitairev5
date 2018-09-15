import { Card } from "./card";

export class Deck {
    cardList: Card[] = [];

    pushCard(card:Card) {
        this.cardList.push(card);
    }

    removeTopCard(): Card {
        return this.cardList.pop();
    }

}
