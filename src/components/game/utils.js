export const DeckGenerator = () => {
  const deckArray = [];
  const suits = ["hearts", "spades", "diamonds", "clubs"];

  suits.forEach(suit => {
    for (let i = 1; i < 14; i++) {
      if (i === 1) {
        deckArray.push({ suit, value: "1 OR 11", img: `ace_of_${suit}.png` });
      } else if (i > 9) {
        deckArray.push({ suit, value: 10, img: `${i}_of_${suit}.png` });
      } else deckArray.push({ suit, value: i, img: `${i}_of_${suit}.png` });
    }
  });
  return deckArray;
};
