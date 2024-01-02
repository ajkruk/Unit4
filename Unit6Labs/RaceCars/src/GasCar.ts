import { Racer } from "./Racer";

export class GasCar implements Racer {
    team: string
    speed: number = 0
    fuel?: number

    constructor(team: string, fuel?: number) {
        this.team = team;
        if(fuel != undefined) {
            this.fuel = fuel;
        } else {
            this.fuel = 10
        };
    };

    accelerate(): void {
        this.speed = this.speed + 2;
        if(this.fuel) {
            this.fuel = this.fuel - 1;
        };  
    };
    isFuelEmpty(): boolean {
        if(this.fuel != undefined && this.fuel <= 0) {
            return true;
        }
        return false; 
    };
};