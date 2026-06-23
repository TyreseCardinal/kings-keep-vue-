export function dealKings(specialReserve) {
  const playerKings = [];

  for (let i = specialReserve.length - 1; i >= 0; i--) {
    if (specialReserve[i].rank === "K") {
      playerKings.push(
        specialReserve.splice(i, 1)[0]
      );

      if (playerKings.length === 2) {
        break;
      }
    }
  }

  return {
    player1King: playerKings[0],
    player2King: playerKings[1],
  };
}