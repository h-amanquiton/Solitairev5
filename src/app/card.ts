export class Card {
    rank: number;
    suit: number;
    faceUp: boolean;

    constructor (rank, suit, faceUp) {
        this.rank = rank;
        this.suit = suit;
        this.faceUp = faceUp;
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
            return '../assets/cards/backDisplay.JPG';
        }
        //return "../assets/cards/" + this.suit + '-' + this.rank + ".JPG";
    }
}
