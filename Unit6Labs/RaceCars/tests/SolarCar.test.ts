import { SolarCar } from "../src/SolarCar";

describe("SolarCar", () => {
    test("the team property is set from the constructor parameter", () => {
        expect(new SolarCar("Team-Yellow", 45)).toEqual({team: "Team-Yellow", speed: 45});
    });
    test("the team property is set from the constructor parameter", () => {
        expect(new SolarCar("Team-Yellow")).toEqual({team: "Team-Yellow", speed: 0});
    });
    test("the team property is set from the constructor parameter", () => {
        const blue = new SolarCar("Blue");
        blue.accelerate();
        expect(blue).toEqual({team: "Blue", speed: 1});
    });
    test("the team property is set from the constructor parameter", () => {
        const blue = new SolarCar("Blue");
        blue.accelerate();
        blue.accelerate();
        expect(blue).toEqual({team: "Blue", speed: 2});
    });
    test("the team property is set from the constructor parameter", () => {
        const orange = new SolarCar("Orange");
        expect(orange.isFuelEmpty()).toEqual(false);

    });
});