import { Coffee } from "./Coffee";
import { Package } from "./Package";

export class CoffeeShop {
  public static generateReceipt(drinks: Coffee[]) {
    const result = drinks.reduce(
      (totals, drink) => ({
        cost: totals.cost + drink.cost,
        names: totals.names.concat(drink.name),
      }),
      {
        cost: 0,
        names: [],
      },
    );

    return `Total: $${result.cost}; ${result.names.join(", ")}`;
  }

  public static toGo<T extends Package>(container: T, drinks: Coffee[]) {
    container.contents = drinks;
    return container;
  }
}
