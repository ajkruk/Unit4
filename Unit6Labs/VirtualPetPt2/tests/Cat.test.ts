import { Cat } from "../src/Cat";

describe("Cat", () => {
    test("create cat Emmet", () => {
        expect(new Cat("Emmet", "grey")).toEqual({ name: "Emmet", hunger: 50, happiness: 50, color: "grey"});
   
});
});

describe("getAttitude", () => {
    test("getAttitude returns inquisitive for positive satisfaction", () => {
        let emmet = new Cat ("Emmet", "grey"); 
        emmet.happiness = 100
        const attitude = emmet.getAttitude();
        expect(attitude).toBe("inquisitive");
    });

    test("getAttitude returns grumpy for negative satisfaction", () => {
        let emmet = new Cat ("Emmet", "grey"); 
        emmet.happiness = 10
        const attitude = emmet.getAttitude();
        expect(attitude).toBe("grumpy");
            
    });

    test("getAttitude returns grumpy for zero satisfaction", () => {
        let emmet = new Cat ("Emmet", "grey"); 
        const attitude = emmet.getAttitude();
        expect(attitude).toBe("grumpy");

    });
});

describe("describe", () => {
    test("Emmet returns string with name, hunger, happiness, color, and attitude", () => {
        let emmet = new Cat ("Emmet", "grey"); 
        emmet.happiness = 100;
        emmet.hunger = 80
        expect(emmet.describe()).toBe("Name: Emmet, Hunger: 80, Happiness: 100, color: grey, attitude: inquisitive")
    });
});