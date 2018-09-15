export class Card {
    rank: number;
    suit: number;

    constructor (rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    //private cardId = this.suit+"-"+this.rank;

    get id() {
        return this.suit + '-' + this.rank;
    }
}
