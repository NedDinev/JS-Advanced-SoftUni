function printDeckOfCards(cards) {
  function cardFactory(face, suit) {
    let cardOptions = {
      validFaces: [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
      ],
      validSuits: { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" },
    };

    if (
      cardOptions.validFaces.includes(face) &&
      cardOptions.validSuits.hasOwnProperty(suit)
    ) {
      return `${face}${cardOptions.validSuits[suit].toString()}`;
    } else {
      return `stop`;
    }
  }
  let allCards = [];
  for (let currCard of cards) {
    let cardFace = currCard.slice(0, -1);
    let cardSuit = currCard.slice(currCard.length - 1);
    if (cardFactory(cardFace, cardSuit) == "stop") {
      console.log(`Invalid card: ${cardFace}${cardSuit}`);
      allCards = [];
      break;
    }
    allCards.push(cardFactory(cardFace, cardSuit));
  }
  if (allCards.length > 0) {
    console.log(allCards.join(" "));
  }
}
printDeckOfCards(["AS", "10D", "KH", "2C"]);
printDeckOfCards(["5S", "3D", "QD", "1C"]);
