import * as testModule from "./index";

const tsModule: { TicTacToe: any, Game: any } = testModule as any;

class TestGame extends tsModule.Game {
    public maximumPlayers = 3;
}

describe("1-classes:", () => {

  describe("Game", () => {
    let game: any;

    beforeEach(() => {
        game = new TestGame();
    });

    it("Game should have a private property 'players'", () => {
      expect(game.players).toBeDefined();
    });

    it("Game should have an 'addPlayer' method", () => {
      expect(game.addPlayer).toBeDefined();
      expect(game.addPlayer.call).toBeDefined();
    });

    it("Can add players to the game", () => {
      game.addPlayer({ name: "A" });
      game.addPlayer({ name: "B" });
      game.addPlayer({ name: "C" });
      expect(game.players[0].name).toEqual("A");
      expect(game.players[1].name).toEqual("B");
      expect(game.players[2].name).toEqual("C");
      expect(game.players.length).toEqual(3);
    });

    it("Adding too many players throws an error", () => {
      game.addPlayer({ name: "A" });
      game.addPlayer({ name: "B" });
      game.addPlayer({ name: "C" });

      try {
        game.addPlayer({ name: "C" });
        fail("addPlayer should throw an exception when the max number of players is reached.");
      } catch (err) {
        expect((err as Error).message).toEqual("No remaining positions");
      }
    });

    it("First added player should go first", () => {
      ["A", "B", "C"].forEach((name) => game.addPlayer({ name }));

      expect(game.whosTurn().name).toEqual("A");
    });

    [
      { moves: 3, whosTurn: "A" },
      { moves: 2, whosTurn: "C" },
      { moves: 16, whosTurn: "B" },
      { moves: 1, whosTurn: "B" },
    ].forEach(({ moves, whosTurn }) => {
      it("First added player should go first", () => {
        ["A", "B", "C"].forEach((name) => game.addPlayer({ name }));

        while (moves-- > 0) {
          game.completeTurn();
        }

        expect(game.whosTurn().name).toEqual(whosTurn);
      });
    });
  });

  describe("TicTacToe", () => {
    let game: any;

    beforeEach(() => {
        game = new tsModule.TicTacToe();
    });

    it("should be exported from the index", () => {
      expect(tsModule.TicTacToe).toBeDefined();
    });

    it("should be an instance of Game", () => {
      expect(game instanceof tsModule.Game).toBe(true);
    });

    it("should have a 'maximumPlayers' value of 2", () => {
      expect(game.maximumPlayers).toEqual(2);
    });

    describe("gamePlay", () => {
      const tom = { name: "Tom", token: "X"};
      const jerry = { name: "Jerry", token: "O"};
      beforeEach(() => {
        game.addPlayer(tom);
        game.addPlayer(jerry);
      });

      it("calculateWinner should return undefined when no winner", () => {
        expect(game.calculateWinner()).toBeUndefined();
      });

      [
        { moves: [0, 2, 3, 4, 6], board: "X_O/XO_/X__", winner: tom },
        { moves: [0, 4, 3, 6, 1, 2], board: "XXO/XO_/OX_", winner: jerry },
        { moves: [0, 3, 2, 1, 8, 4, 5], board: "XOX/OOX/__X", winner: tom },
        { moves: [4, 1, 3, 5, 6, 0, 2], board: "OOX/XXO/X__", winner: tom },
      ].forEach(({ moves, board, winner }) => {
        it(`declare a winner for board ${board}`, () => {
          moves.forEach((m) => game.takeTurn(m));

          expect(game.calculateWinner().name).toBe(winner.name);
          expect(game.calculateWinner().token).toBe(winner.token);
        });
      });

      it(`a tie should return undefined`, () => {
        [6, 4, 8, 7, 1, 3, 5, 2, 0].forEach((m) => game.takeTurn(m));

        expect(game.calculateWinner()).toBeUndefined();
      });
    });
  });
});
