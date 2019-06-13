export const name = "4-enums";

export enum Direction {
    North = 1,
    South,
    East,
    West,
}

export function computeDirection(dirA: Direction, dirB?: Direction, dirC?: Direction) {
    return [dirA, dirB, dirC].reduce((computed, dir) => {
        return `${computed}${dir ? Direction[dir] : ""}`;
    }, "");
}
