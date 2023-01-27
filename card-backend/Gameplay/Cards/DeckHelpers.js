function shuffle(deck) {
    let currentIndex = deck.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }

    return deck;
}
function getDeckCost(deck) {
    
    // Get the total cost of the deck
    var cost = 0;
    for (let i = 0; i < deck.cards.length; i++) {
        cost += deck.cards[i].tier;
    }
    return cost;
}