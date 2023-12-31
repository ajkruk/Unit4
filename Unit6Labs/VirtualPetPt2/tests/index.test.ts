import { VirtualPet } from "../src/index";

describe("VirtualPet", () => {
    test("create Baxter", () => {
        expect(new VirtualPet("Baxter")).toEqual({ name: "Baxter", hunger: 50, happiness: 50});
    }); 
});

describe("describe", () => {
    test("Baxter describe method, hunger 50 happiness 50", () => {
        let baxter: VirtualPet = new VirtualPet("Baxter");
        expect(baxter.describe()).toBe("Name: Baxter, Hunger: 50, Happiness: 50")
    });

    test("Emmet describe method, hunger 50 happiness 50", () => {
        let emmet: VirtualPet = new VirtualPet("Emmet");
        expect(emmet.describe()).toBe("Name: Emmet, Hunger: 50, Happiness: 50")
    });
});

describe("getSatisfaction", () => {
    test("default values equal 0", () => {
        let kimchi: VirtualPet = new VirtualPet("Kimchi");
        expect(kimchi.getSatisfaction()).toEqual(0);
    });

    test("happiness 80 minus hunger default equals 30", () => {
        let kimchi: VirtualPet = new VirtualPet("Kimchi");
        kimchi.happiness = 80;
        expect(kimchi.getSatisfaction()).toEqual(30);
    });
});

describe("makeSound", () => {
    test("bob says woof", () => {
        let bob: VirtualPet = new VirtualPet("Bob");
        expect(bob.makeSound("woof")).toBe("Bob says woof");
    });

    test("Emmet says meow", () => {
        let emmet: VirtualPet = new VirtualPet("Emmet");
        expect(emmet.makeSound("meow")).toBe("Emmet says meow");
    });
});

describe("feed", () => {
    
    test("feed one time return hunger of 40", () => {
        let emmet: VirtualPet = new VirtualPet("Emmet");
        emmet.feed();
        expect(emmet.hunger).toEqual(40);
    });

    test("feed one time return hunger of 0", () => {
        let emmet: VirtualPet = new VirtualPet("Emmet");
        emmet.hunger = 10;
        emmet.feed();
        expect(emmet.hunger).toBe(0);
    });

    test("feed one time return hunger of 0", () => {
        let emmet: VirtualPet = new VirtualPet("Emmet");
        emmet.hunger = 10;
        emmet.feed();
        emmet.feed();
        expect(emmet.hunger).toBe(0);
    });
});

describe("play", () => {
    test("play with emmet and return 60", () => {
        let emmet: VirtualPet = new VirtualPet("Emmet");
        emmet.play();
        expect(emmet.happiness).toBe(60);
    });

    test("play with emmet two times and return 80", () => {
        let emmet: VirtualPet = new VirtualPet("Emmet");
        emmet.happiness = 60;
        emmet.play();
        emmet.play();
        expect(emmet.happiness).toBe(80);
    });

    test("play with emmet and return 100", () => {
        let emmet: VirtualPet = new VirtualPet("Emmet");
        emmet.happiness = 85;
        emmet.play();
        emmet.play();
        expect(emmet.happiness).toBe(100);
    });

});