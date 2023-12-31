export class VirtualPet {
    name: string;
    hunger: number = 50;
    happiness: number = 50;

    constructor(name: string) {
        this.name = name;
    };


    describe() : string {
        return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}`;
    };

    getSatisfaction() : number {
        return this.happiness - this.hunger;
    };

    makeSound(sound: string) : string {
        return `${this.name} says ${sound}`;
    };

    feed() {
        if(this.hunger > 9) {
            this.hunger = this.hunger - 10;
        } else  
        this.hunger = 0;
    };

    play() {
        if(this.happiness < 91) {
            this.happiness = this.happiness + 10;
        } else 
            this.happiness = 100;
    };

};