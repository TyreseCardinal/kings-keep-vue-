<template>
  <div class="game-view">
    <h1>King's Keep</h1>
  </div>
</template>

<script setup>
import { createDeck, shuffle } from "../game/deck/deckGenerator.js";
import { createTowerDeck }
  from "../game/setup/createTowerDeck.js";

const deck = createDeck();

shuffle(deck);

const {
  towerDeck,
  specialReserve,
} = createTowerDeck(deck);

console.log("Tower Deck:", towerDeck);
console.log("Tower Deck Size:", towerDeck.length);

console.log("Special Reserve:", specialReserve);
console.log("Special Reserve Size:", specialReserve.length);
</script>

<style scoped>
.game-view {
  padding: 2rem;
}
</style>