function printDeckOfCards(cards = []) {
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
  
    let deck = [];
    for (const cardAsString of cards) {
        let suit = cardAsString.slice(-1);
        let face = cardAsString.substring(0, cardAsString.length - 1);
        try {
            let card = makeCard(face, suit);
            deck.push(card);
        } catch (error) {
            console.log(`Invalid card: ${face}${suit}`);
            return;
            // return `Invalid card: ${face}${suit}`;
        }
    }
    // return deck.join(' ');
    console.log(deck.join(' '));
}
  
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);