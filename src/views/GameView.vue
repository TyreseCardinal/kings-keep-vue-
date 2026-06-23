<template>
  <div class="game-view">
    <h1>King's Keep</h1>
  </div>
</template>

<script setup>
import { createDeck, shuffle }
  from "../game/deck/deckGenerator.js";

import { createTowerDeck }
  from "../game/setup/createTowerDeck.js";

import { dealTowers }
  from "../game/setup/dealTowers.js";

import { dealKings }
  from "../game/setup/dealKings.js";

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

console.log("Player 1 Tower");
console.log(player1Tower);

console.log("Player 2 Tower");
console.log(player2Tower);

console.log("Remaining Tower Deck");
console.log(towerDeck.length);

console.log("Player 1 King:", player1King);
console.log("Player 2 King:", player2King);

console.log(
  "Special Reserve Remaining:",
  specialReserve.length
);
</script>

<style scoped>
.game-view {
  padding: 2rem;
}
</style>