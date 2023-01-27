const readFile = require('fs/promises');

async function fetchCardData(cardName) {
    const json = await readFile('./cardData.json')
    const cardData = JSON.parse(json)
    console.log(cardData)
}

