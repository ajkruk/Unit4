import { GasCar } from "../src/GasCar";

describe("GasCar", () => {
    test("The team and fuel properties are set from the constructor parameters.", () => {
        expect(new GasCar("Green", 20)).toEqual({team: "Green", speed: 0, fuel: 20});
    });
    test("fuel defaults to 10, when the second constructor parameter is omitted.", () => {
        expect(new GasCar("Green")).toEqual({team: "Green", speed: 0, fuel: 10});
    });

    test("the speed property starts at 0", () => {
        expect(new GasCar("Green", 15)).toEqual({team: "Green", speed: 0, fuel: 15});
    });
});
describe("accellerate", () => {
    test("Calling accelerate once brings speed to 2.", () => {
        const red = new GasCar("Red");
        red.accelerate();
        expect(red.speed).toBe(2);
    });
    test("Calling accelerate once brings speed to 4.", () => {
        const red = new GasCar("Red");
        red.accelerate();
        red.accelerate();
        expect(red.speed).toBe(4);
    });
    test("Calling accelerate twice reduces fuel by 1", () => {
        const red = new GasCar("Red");
        red.accelerate();
        expect(red.fuel).toBe(9);
    });
    test("Calling accelerate twice reduces fuel by 2", () => {
        const red = new GasCar("Red");
        red.accelerate();
        red.accelerate();
        expect(red.fuel).toBe(8);
    });
});

describe("isFuelEmpty", () => {
    test("isFuelEmpty returns true when fuel is 0", () => {
        const red = new GasCar("Red", 0);
        console.log(red);
        expect(red.isFuelEmpty()).toBe(true);
    });
    test("isFuelEmpty returns true when fuel is 0", () => {
        const red = new GasCar("Red");
        console.log(red);
        expect(red.isFuelEmpty()).toBe(false);
    });
});

    