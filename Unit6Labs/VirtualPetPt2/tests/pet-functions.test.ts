import { Cat } from "../src/Cat";
import { Dog } from "../src/Dog";
import { VirtualPet } from "../src/index";
import { decay, makePet } from "../src/pet-functions";

describe("decay", () => {
    test("decay increases hunger by 5 and decreases happiness by 5", () => {
        const lucy = new Dog("Lucy");
        decay(lucy);
        expect(lucy.happiness).toEqual(45);
        expect(lucy.hunger).toEqual(55);
    });

    test(" hunger does not go above 100", () => {
        new Dog ("Lucy");
        let lucy = new Dog("Lucy");
        lucy.hunger = 85;
        decay(lucy);
        decay(lucy);
        decay(lucy);
        decay(lucy);
        expect(lucy.happiness).toEqual(30);
        expect(lucy.hunger).toEqual(100);
    });
    test(" hunger does not go above 100", () => {
        new Dog ("Lucy");
        let lucy = new Dog("Lucy");
        lucy.happiness = 10;
        decay(lucy);
        decay(lucy);
        decay(lucy);
        expect(lucy.happiness).toEqual(0);
        expect(lucy.hunger).toEqual(65);
    });

});

describe("makePet", () => {
    test("if type is dog, return new dog with provided name", () => {
        makePet("Lucy", "dog");
        expect(new Dog("Lucy")).toEqual({name : "Lucy", hunger : 50, happiness : 50});
    });
    test("if type is cat, return new cat with provided name and set color to black", () => {
        makePet("Kimchi", "cat");
        expect(new Cat("Kimchi", "black")).toEqual({name : "Kimchi", hunger : 50, happiness : 50, color : "black"});
    });
    test("if type is neith dog nor cat, return new virtualpet with provided name", () => {
        makePet("Nessie", "monster");
        expect(new VirtualPet("Nessie")).toEqual({name : "Nessie", hunger : 50, happiness : 50});
    });

});