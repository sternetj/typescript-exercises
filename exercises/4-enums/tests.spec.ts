import * as testModule from "./index";

const tsModule: any = testModule || {};
const Direction: any = tsModule.Direction;

describe("4-enums:", () => {
  it("should a Direction enum", () => {
    expect(Direction).toBeDefined();
  });

  ["North", "South", "East", "West"].forEach((member) => {
    it(`should have a ${member} member of the Direction enum`, () => {
      expect(Direction[member]).toBeDefined();
    });
  });

  it("should return the correct computed direction", () => {
    expect(tsModule.computeDirection).toBeDefined();
    expect(tsModule.computeDirection(Direction.North)).toEqual("North");
    expect(tsModule.computeDirection(Direction.North, Direction.West)).toEqual("NorthWest");
    expect(tsModule.computeDirection(Direction.South, Direction.South, Direction.West)).toEqual("SouthSouthWest");
    expect(tsModule.computeDirection(Direction.South, Direction.West, Direction.South)).toEqual("SouthWestSouth");
  });

  it("should use the Direction enum to compute the direction", () => {
    let d = Direction;
    let usable = [d.North, d.South, d.East, d.West].filter((v) => !!v);
    let a = usable[0]; 
    let b = usable[1 % usable.length]; 
    let c = usable[2 % usable.length];
 
    expect(tsModule.computeDirection(d[a])).toEqual(`${a}`);
    expect(tsModule.computeDirection(d[a], d[c])).toEqual(`${a}${c}`);
    expect(tsModule.computeDirection(d[b], d[b], d[c])).toEqual(`${b}${b}${c}`);
    expect(tsModule.computeDirection(d[b], d[c], d[b])).toEqual(`${b}${c}${b}`);
  });
});
