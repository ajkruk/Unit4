import { VirtualPet } from "./index";
import { Cat } from "../src/Cat";
import { Dog } from "../src/Dog";



export function decay(pet: VirtualPet) {
    if(pet.hunger <= 95 && pet.happiness >= 5 ) {
        pet.happiness = pet.happiness - 5;
        pet.hunger = pet.hunger + 5;
        console.log(`if1 ${pet.hunger}`);
    } else if(pet.hunger >= 100 && pet.happiness > 5) {
        pet.happiness = pet.happiness - 5;
        console.log(`if2 ${pet.hunger}`);
    } else if(pet.hunger < 95 && pet.happiness <= 0) {
        pet.hunger = pet.hunger + 5;
        console.log(`if3 ${pet.hunger}`);
    };  
};

export function makePet(name: string, type: string) {
    if(type = "dog") {
    return Dog;
    }else if(type ="cat") {
        return Cat;
    }else return VirtualPet;

};