import { defineStore } from "pinia";
import { initializeGame }
  from "../game/setup/initializeGame.js";

export const useGameStore = defineStore(
  "game",
  {
    state: () => ({
      player1: {
        tower: [],
        king: null,
        hand: [],
      },

      player2: {
        tower: [],
        king: null,
        hand: [],
      },

      drawPile: [],
      discardPile: [],

      specialReserve: [],

      currentPlayer: 1,
      turnNumber: 1,

      winner: null,
    }),

    actions: {
      initialize() {
        const game = initializeGame();

        this.player1.tower =
          game.player1Tower;

        this.player1.king =
          game.player1King;

        this.player1.hand =
          game.player1Hand;

        this.player2.tower =
          game.player2Tower;

        this.player2.king =
          game.player2King;

        this.player2.hand =
          game.player2Hand;

        this.drawPile =
          game.drawPile;
      },
    },
  }
);