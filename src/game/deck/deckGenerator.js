import { suits, ranks } from "../constants/cards";

export function createDeck() {
  const deck = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        rank,
        suit,
      });
    }
  }

  deck.push({
    rank: "Joker",
    suit: null,
  });

  deck.push({
    rank: "Joker",
    suit: null,
  });

  return deck;
}

export function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [deck[i], deck[randomIndex]] = [
      deck[randomIndex],
      deck[i],
    ];
  }

  return deck;
}