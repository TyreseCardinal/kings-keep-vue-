export function createDrawPile(
  towerDeck,
  specialReserve
) {
  const drawPile = [
    ...towerDeck,
    ...specialReserve,
  ];

  return drawPile;
}