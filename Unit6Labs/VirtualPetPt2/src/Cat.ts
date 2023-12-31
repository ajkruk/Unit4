import { VirtualPet } from "./index";

export class Cat extends VirtualPet {
    color: string;
    attitude: any;
    constructor(name: string, color: string) {
        super(name);
        this.name = name;
        this.color = color;
    };

    getAttitude() : string {
        const satisfaction: number = this.getSatisfaction();
        let attitude: string;
        if (satisfaction > 0) {
            return attitude = "inquisitive";
        } else
        return attitude = "grumpy";
    };

    describe() : string {
        return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}, color: ${this.color}, attitude: ${this.getAttitude()}`;
    };
};

