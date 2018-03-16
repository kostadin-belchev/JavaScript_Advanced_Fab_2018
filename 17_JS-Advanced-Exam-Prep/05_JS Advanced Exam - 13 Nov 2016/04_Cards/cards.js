function cardDeckBuilder(selector) {
    // TODO: return the card builder
    // You may use the following Unicode characters for the card suites:
    // \u2663 ♣	  \u2666 ♦	\u2665 ♥	\u2660 ♠
    let suits = {
        C:'\u2663',//♣
        D: '\u2666',// ♦	
        H: '\u2665',// ♥
        S:	'\u2660' // ♠
    }
    function addCard(face, suit) {
        //alert('works till here');
       
        let cardDiv = $(`<div class="card">${face} ${suits[suit]}</div>`).click(reverse);
        $(selector).append(cardDiv);
    }
    // Implement a “reverse cards” functionality: when any of the cards is clicked, 
    // their order in the DOM should be reversed (reordered in the DOM tree in reverse order –
    // from the last to the first).
    function reverse() {
        let cards = $('.card');
        //console.log(cards);
        $(selector).append(cards.get().reverse());
    }
    // The function cardDeckBuilder(selector) takes as input a DOM selector (string) and returns an object holding a function addCard(face, suit). 
    return {
        addCard
    }
}