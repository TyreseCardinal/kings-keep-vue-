export function dealOpeningHands(drawPile) {
  const player1Hand = [];
  const player2Hand = [];

  for (let i = 0; i < 5; i++) {
    player1Hand.push(
      drawPile.shift()
    );
    player2Hand.push(
      drawPile.shift()
    );
  }


  return {
    player1Hand,
    player2Hand,
  };
}