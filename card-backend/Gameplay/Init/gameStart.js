

function gameStart(playerOneName, playerTwoName, playerOneDeck, playerTwoDeck) {
    // Determine deck costs

    var c = new Card("Lightnings Fury", 4, "Elemental", "Deals X damage");
    var c2 = new Card("Water Shard", 2, "Elemental", "Deals 5 damage");
    var d = new Deck([c, c2]);
    console.log(getDeckCost(d));
    fetchCardData("Lightning's Fury");
    var player1 = new Player(playerOneName, playerTwoName, shuffle(playerOneDeck))
    var player2 = new Player(playerTwoName, playerOneName, shuffle(playerTwoDeck))

    
}





gameStart("Googolplex", "GeneralCow", [], [])


