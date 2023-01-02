class Player {
    constructor(player, opponent, deck) {
        this.name = player;
        this.opponent = opponent;
        this.activeTurn = false;
        this.playPhase = false;
        this.drawPhase = false;
        this.turnCount = 0;
        this.deck = deck;
        this.mana = 100;
        this.hand = [];
        this.drawCount = 0;
        this.cardsPlayed = 0;
        this.exhaustion = [];
        this.tutorCount = 0;
        this.tutorCost = 0;
    }
}

class Deck {
    constructor(cards) {
        this.cards = cards;
    }
}

class Card {
    constructor(name, tier, type, text) {
        this.name = name;
        this.tier = tier;
        this.type = type;
        this.text = text;
    }
}
