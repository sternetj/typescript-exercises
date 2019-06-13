import { Player } from "./Player";

export abstract class Game {
    public abstract maximumPlayers: number;
    private players: Player[] = [];
    private turnIndex = 0;

    public addPlayer(player: Player) {
        if (this.players.length === this.maximumPlayers) {
            throw new Error("No remaining positions");
        }

        this.players.push(player);
    }

    public whosTurn() {
        return this.players[this.turnIndex];
    }

    public completeTurn() {
        this.turnIndex++;
        this.turnIndex = this.turnIndex % this.players.length;
    }
}
