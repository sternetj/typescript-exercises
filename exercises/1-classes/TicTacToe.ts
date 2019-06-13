import { Game } from "./Game";

type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export class TicTacToe extends Game {
  public maximumPlayers = 2;
  private board = [];

  public takeTurn(cell: Cell) {
    const player = this.whosTurn();
    this.board[cell] = player;
    this.completeTurn();
  }

  public calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (this.board[a] === this.board[b] && this.board[b] === this.board[c]) {
        return this.board[a];
      }
    }

    return undefined;
  }
}
