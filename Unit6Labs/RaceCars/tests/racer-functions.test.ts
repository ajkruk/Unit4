import { Racer } from "../src/Racer";
import { GasCar } from "../src/GasCar";
import { SolarCar } from "../src/SolarCar";
import { findAverageSpeed, findRacersWithEmptyFuel, getFasterRacer } from "../src/racer-functions";

describe("findRacersWithEmptyFuel", () => {
    test("test case with an array of GasCar where some have no fuel", () => {
        const racers: Racer[] = [
            (new GasCar("red", 50)),
            (new GasCar("blue", 0)),
            (new GasCar("green", 10)),
            (new GasCar("orange", 0)),
        ];  
    expect(findRacersWithEmptyFuel(racers)).toEqual([{team: "blue", speed: 0, fuel: 0}, {team: "orange", speed: 0, fuel: 0}]);
    });

    test("test case with an array of GasCar where all have no fuel", () => {
        const racers: Racer[] = [
            (new GasCar("red", 0)),
            (new GasCar("blue", 0)),
            (new GasCar("green", 0)),
            (new GasCar("orange", 0)),
        ];  
    expect(findRacersWithEmptyFuel(racers)).toEqual([{team: "red", speed: 0, fuel: 0}, {team: "blue", speed: 0, fuel: 0}, {team: "green", speed: 0, fuel: 0}, {team: "orange", speed: 0, fuel: 0}]);
    });

    test("an array of GasCar where none have no fuel Expect an empty array as the result.", () => {
        const racers: Racer[] = [
            (new GasCar("red")),
            (new GasCar("blue")),
            (new GasCar("green")),
            (new GasCar("orange")),
        ];  
    expect(findRacersWithEmptyFuel(racers)).toEqual([]);
    });

    test("Do a test case with an array of SolarCar Expect an empty array as the result", () => {
        const racers: Racer[] = [
            (new SolarCar("red")),
            (new SolarCar("blue")),
            (new SolarCar("green")),
            (new SolarCar("orange")),
        ];  
    expect(findRacersWithEmptyFuel(racers)).toEqual([]);
    });
    test("Do a test case with an array that has a mix of SolarCar and GasCar", () => {
        const racers: Racer[] = [
            (new SolarCar("red")),
            (new GasCar("blue")),
            (new GasCar("green", 0)),
            (new SolarCar("orange")),
        ];  
    expect(findRacersWithEmptyFuel(racers)).toEqual([{team: "green", speed: 0, fuel: 0}]);
    });
    test("Do a test case with an array of SolarCar Expect an empty array as the result", () => {
        const racers: Racer[] = [
        ];  
        expect(findRacersWithEmptyFuel(racers)).toEqual([]);
    });
});
describe("findAverageSpeed", () => {
    test("Do a test case with an array of GasCar with different speeds", () => {
        const red = new GasCar("red");
        const blue = new GasCar("blue");
        const green = new GasCar("green");
        const orange = new GasCar("orange");

        red.speed = 50
        blue.speed = 40
        green.speed = 30
        orange.speed = 20
    
        const racers: Racer[] = [
            (red),
            (blue),
            (green),
            (orange),
        ];

        expect(findAverageSpeed(racers)).toEqual(35);
    });
    test("Do a test case with an array of SolarCar and GasCar with different speeds", () => {
        const red = new SolarCar("red");
        const blue = new GasCar("blue");
        const green = new SolarCar("green");
        const orange = new GasCar("orange");

        red.speed = 50
        blue.speed = 40
        green.speed = 30
        orange.speed = 20
    
        const racers: Racer[] = [
            (red),
            (blue),
            (green),
            (orange),
        ];

        expect(findAverageSpeed(racers)).toEqual(35);
    }); 
    test(" an array of cars that all have 0 speed", () => {
        const red = new SolarCar("red");
        const blue = new GasCar("blue");
        const green = new SolarCar("green");
        const orange = new GasCar("orange");
    
        const racers: Racer[] = [
            (red),
            (blue),
            (green),
            (orange),
        ];

        expect(findAverageSpeed(racers)).toEqual(0);
    }); 
    test(" an empty of cars that all have 0 speed", () => {
        const racers: Racer[] = [];

    expect(findAverageSpeed(racers)).toEqual(0);
    }); 
});

describe("getFasterRacer", () => {
    test("racer A is faster", () => {
    let racerA = new GasCar("yellow");
    let racerB = new GasCar("blue");

    racerA.speed = 75
    racerB.speed = 70
    expect(getFasterRacer(racerA, racerB)).toBe(racerA);
    });

    test("racer B is faster", () => {
        let racerA = new GasCar("yellow");
        let racerB = new GasCar("blue");
    
        racerA.speed = 55
        racerB.speed = 70
    expect(getFasterRacer(racerA, racerB)).toBe(racerB);
    });

    test("racers are the same speed", () => {
        let racerA = new GasCar("yellow");
        let racerB = new GasCar("blue");
    
        racerA.speed = 65
        racerB.speed = 65
    expect(getFasterRacer(racerA, racerB)).toBe(null);
    });

    test("racers are the same speed", () => {
        let racerA = new GasCar("yellow");
        let racerB = new SolarCar("blue");
    
        racerA.speed = 55
        racerB.speed = 70
    expect(getFasterRacer(racerA, racerB)).toBe(racerB);
    });

});