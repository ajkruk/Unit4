import { Dog } from "../src/Dog";

describe("Dog", () => {
    test("create dog Baxter", () => {
        expect(new Dog("Baxter")).toEqual({ name: "Baxter", hunger: 50, happiness: 50});
    }); 

    test("play with dog Baxter and return 65", () => {
        let baxter: Dog = new Dog("Baxter");
        baxter.play();
        expect(baxter.happiness).toBe(65);
    });

    test("play with dog Baxter happiness does not go above 100", () => {
        let baxter: Dog = new Dog("Baxter");
        baxter.play();
        baxter.play();
        baxter.play();
        baxter.play();
        baxter.play();
        expect(baxter.happiness).toBe(100);
    });
});

   