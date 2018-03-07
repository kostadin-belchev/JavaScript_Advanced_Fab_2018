let result = (function(){
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }
        get face() {
            return this._face;
        }
        set face(newFace) {
            validFaces
            newFace
            if (!validFaces.includes(newFace)) {
                throw new Error('Invalid face.')
            }
            this._face = newFace;
        }

        get suit() {
            return this._suit;
        }
        set suit(newSuit) {
            if (!Object.keys(Suits).map(e => Suits[e]).includes(newSuit)) {
                throw new Error('Invalid suit.')
            }
            this._suit = newSuit;
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);
console.log(card);
card.face = 'A';
card.suit = Suits.DIAMONDS;
console.log(card);

let card2 = new Card('1', Suits.DIAMONDS); // should throw Error
console.log(card2);

