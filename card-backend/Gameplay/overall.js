function getPlayerstate(playername) {

}
function createPlayer(name, deck){
    var player = [
        {
            "name": name,
            "opponent": getOpponent(name),
            "activeTurn": false,
            "playPhase": false,
            "drawPhase": false,
            "turnCount": 0,
            "deck": deck,
            "mana": 100,
            "hand": 0,
            "drawCount": 0,
            "cardsPlayed": 0,
            "exhaustion": [],
            "tutorCount": 0,
            "tutorCost": 0
    
        }
    ]
    return player 
}
function matchInit(name){
    var player = createPlayer(name)
    
}
function getFirstplayer(player){
if (player.mana > player.opponent.mana) {
    player.activeTurn = true
} else if (player.mana < player.opponent.mana) {
    player.activeTurn = false
} else {
var n1 = convertLetterToNumber(player.name)
var n2 = convertLetterToNumber(player.opponent.name)
if (n1 > n2) {
    player.activeTurn = true
} else {
    player.activeTurn = false 
}
} 
}
function convertLetterToNumber(str) {
    var out = 0, len = str.length;
    for (pos = 0; pos < len; pos++) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
  }

function getOpponent(playername){
return 

}


