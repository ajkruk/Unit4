import { VirtualPet } from "./index";

export class Dog extends VirtualPet {

    play() {
        this.happiness += 15;

        if(this.happiness > 100) {
            this.happiness = 100;
        };
    }
}
