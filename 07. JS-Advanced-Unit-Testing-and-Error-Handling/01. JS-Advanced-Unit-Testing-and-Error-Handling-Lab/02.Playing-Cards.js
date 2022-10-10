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
    validSuits: { S: "\u2660 ", H: "\u2665", D: "\u2666", C: "\u2663" },
  };

  if (
    cardOptions.validFaces.includes(face) &&
    cardOptions.validSuits.hasOwnProperty(suit)
  ) {
    return `${face}${cardOptions.validSuits[suit].toString()}`;
  } else {
    throw new Error("Error");
  }
}
cardFactory("A", "S");
cardFactory("10", "H");
cardFactory("1", "C");
