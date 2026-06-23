export function dealTowers(towerDeck) {
  const player1Tower = [];
  const player2Tower = [];

  for (let i = 0; i < 7; i++) {
    player1Tower.push(
      towerDeck.shift()
    );
    player2Tower.push(
      towerDeck.shift()
    );
  }


  return {
    player1Tower,
    player2Tower,
  };
}