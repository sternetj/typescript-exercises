import { Coffee } from "./Coffee";

export abstract class Package {
    public contents: Coffee[];
    public abstract howToCarry: string;
}

export class Box extends Package {
    public howToCarry = "Two handed";
}

export class Carrier extends Package {
    public howToCarry = "One handed";
}

export class Bag extends Package {
    public howToCarry = "Over the Shoulder";
}
