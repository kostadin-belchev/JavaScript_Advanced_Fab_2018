function makeCard(face = '', suit = '') {
    let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validCardSuits = ['S', 'H', 'D', 'C'];
    if (validCardFaces.indexOf(face) < 0) {
        throw new Error('Error');
    } // Throw an error if the card is initialized with invalid face or suit
    if (validCardSuits.indexOf(suit) < 0) {
        throw new Error('Error');
    }

    let card = {
        face: face,
        suit: suit,
        toString: () => {
            let suitToChar = {
                'S': "\u2660", // ♠
                'H': "\u2665", // ♥
                'D': "\u2666", // ♦
                'C': "\u2663", // ♣
              };
            
            return `${face}${suitToChar[suit]}`;
        }
    };

    return card;
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
//console.log('' + makeCard('10', 'Q'));
//console.log('' + makeCard('1', 'C'));