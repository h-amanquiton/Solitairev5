export class Card {
    rank: number;
    suit: number;
    faceUp: boolean;
    cardIsRed: boolean;

    constructor (rank, suit, faceUp, cardIsRed) {
        this.rank = rank;
        this.suit = suit;
        this.faceUp = faceUp;
        this.cardIsRed = cardIsRed;
    }

    //private cardId = this.suit+"-"+this.rank;

    get id() {
        return this.suit + '-' + this.rank;
    }

    get src(): string {
        return '../assets/cards' + this.suit + '-' + this.rank + '.JPG';
    }
    
    getRank(): number {
        return this.rank;
    }

    getSuit(): number {
        return this.suit;
    }

    isFaceUp(): boolean {
        return this.faceUp;
    }

    getImg(): string {
        if (this.faceUp) {
            return "../assets/cards/" + this.suit + '-' + this.rank + ".JPG";
        } else {
            return '../assets/cards/backDisplay.jpg';
        }
        //return "../assets/cards/" + this.suit + '-' + this.rank + ".JPG";
    }
}
