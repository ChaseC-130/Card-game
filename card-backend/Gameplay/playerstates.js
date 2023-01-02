function changeMana (player, amount) {
    player.mana = player.mana + amount
}
function changeHand (player, card , add) {
    if (add) {
        player.hand = player.hand + card
    } else {
        player.hand = player.hand - card
    }
   
}
function changeDeck (player, card , add) {
    if (add) {
        player.deck = player.deck + card
    } else {
        player.deck = player.deck - card
    } 
}
function getCardsFromDeck (player, amount) {
    var arr = [];
    for (let i = 0; i<player.deck.length || i < amount; i++) {
        arr.push(player.deck[i]);
    }
    return arr;
}
function getDeckSize (player) {
    return player.deck.length;
}

function getHandSize(player) {
    return player.hand.length;
}