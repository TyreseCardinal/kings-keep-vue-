<template>
  <div class="game-view">
    <h1>King's Keep</h1>
  </div>
</template>

<script setup>
import { useGameStore }
  from "../stores/gameStore.js";

const gameStore = useGameStore();

gameStore.initialize();

console.log(gameStore);
</script>

<style scoped>
.game-view {
  padding: 2rem;
}
</style>