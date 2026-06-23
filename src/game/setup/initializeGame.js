import {
  createDeck,
  shuffle,
} from "../deck/deckGenerator.js";

import {
  createTowerDeck,
} from "./createTowerDeck.js";

import {
  dealTowers,
} from "./dealTowers.js";

import {
  dealKings,
} from "./dealKings.js";

import {
  createDrawPile,
} from "./createDrawPile.js";

import {
  dealOpeningHands,
} from "./dealOpeningHands.js";

export function initializeGame() {
  const deck = createDeck();

  shuffle(deck);

  const {
    towerDeck,
    specialReserve,
  } = createTowerDeck(deck);

  const {
    player1Tower,
    player2Tower,
  } = dealTowers(towerDeck);

  const {
    player1King,
    player2King,
  } = dealKings(specialReserve);

  const drawPile = createDrawPile(
    towerDeck,
    specialReserve
  );

  shuffle(drawPile);

  const {
    player1Hand,
    player2Hand,
  } = dealOpeningHands(drawPile);

  return {
    player1Tower,
    player2Tower,

    player1King,
    player2King,

    player1Hand,
    player2Hand,

    drawPile,
  };
}