import * as testModule from "./index";

const tsModule: {
  CoffeeShop: any;
  Box: any;
  Carrier: any;
  Bag: any;
  Pacakge: any;
} = testModule as any;

class LongBox {
  public howToCarry = "Under Arm";
}

describe("2-generics-interfaces:", () => {
  it("should generate a $3 reciept", () => {
    expect(
      tsModule.CoffeeShop.generateReceipt([
        { cost: 1, name: "Coffee1" },
        { cost: 2, name: "Coffee2" },
      ]),
    ).toEqual("Total: $3; Coffee1, Coffee2");
  });

  it("should generate an $8 reciept", () => {
    expect(
      tsModule.CoffeeShop.generateReceipt([
        { cost: 2, name: "Mocha" },
        { cost: 4, name: "Latte" },
        { cost: 2, name: "Americano" },
      ]),
    ).toEqual("Total: $8; Mocha, Latte, Americano");
  });

  describe("toGo", () => {
    const mocha = { cost: 2, name: "Mocha" };
    const latte = { cost: 4, name: "Latte" };
    const americano = { cost: 2, name: "Americano" };

    it("pack the coffee into a box", () => {
      const box = tsModule.CoffeeShop.toGo(new tsModule.Box(), [mocha, latte]);

      expect(box instanceof tsModule.Box).toBe(true);
      expect(box.howToCarry).toEqual("Two handed");
      expect(box.contents).toEqual([mocha, latte]);
    });

    it("pack the coffee into a bag", () => {
      const bag = tsModule.CoffeeShop.toGo(new tsModule.Bag(), [mocha]);

      expect(bag instanceof tsModule.Bag).toBe(true);
      expect(bag.howToCarry).toEqual("Over the Shoulder");
      expect(bag.contents).toEqual([mocha]);
    });

    it("pack the coffee into a carrier", () => {
      const carrier = tsModule.CoffeeShop.toGo(new tsModule.Carrier(), [mocha, latte, americano]);

      expect(carrier instanceof tsModule.Carrier).toBe(true);
      expect(carrier.howToCarry).toEqual("One handed");
      expect(carrier.contents).toEqual([mocha, latte, americano]);
    });

    it("pack the coffee into a LongBox", () => {
      const longBox = tsModule.CoffeeShop.toGo(new LongBox(), [latte, americano]);

      expect(longBox instanceof LongBox).toBe(true);
      expect(longBox.howToCarry).toEqual("Under Arm");
      expect(longBox.contents).toEqual([latte, americano]);
    });
  });
});
