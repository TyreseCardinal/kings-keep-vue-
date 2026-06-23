export function createTowerDeck(deck) {
  const towerDeck = [];
  const specialReserve = [];

  const specialRanks = ["A", "J", "Q", "K", "Joker"];

  for (const card of deck) {
    if (specialRanks.includes(card.rank)) {
      specialReserve.push(card);
    } else {
      towerDeck.push(card);
    }
  }

  return {
    towerDeck,
    specialReserve,
  };
}
