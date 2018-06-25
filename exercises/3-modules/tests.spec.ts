import * as testModule from "./index";

const tsModule: any = testModule;

describe("3-modules:", () => {
  it("should export a constant PI value", () => {
    expect(tsModule.PI).toEqual(Math.PI);
  });

  it("should export an add function", () => {
    expect(tsModule.add).toBeDefined();
    expect(tsModule.add(1, 5)).toEqual(6);
    expect(tsModule.add(6, 5)).toEqual(11);
    expect(tsModule.add(77, 5)).toEqual(82);
  });

  it("should export a max function", () => {
    expect(tsModule.max).toBeDefined();
    expect(tsModule.max(1, 5)).toEqual(5);
    expect(tsModule.add(6)).toEqual(6);
    expect(tsModule.add(77, 5, 17, 103, -5)).toEqual(103);
  });
});
