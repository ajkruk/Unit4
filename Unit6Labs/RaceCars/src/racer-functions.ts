import { Racer } from "./Racer";

export function findRacersWithEmptyFuel(racers: Racer[]) : Racer[] {
    const needsFuel: Racer[] = [];
    for (let racer of racers) {
        if(racer.isFuelEmpty()) {
            needsFuel.push(racer);
        };
    }; 

    return needsFuel;
};

export function findAverageSpeed(racers: Racer[]) : number {
    let currentSpeeds: number = 0;
    if(racers.length === 0) {
        return 0;
    }
    for (let racer of racers) {
        if(racer.speed > 0) {
            currentSpeeds = currentSpeeds + racer.speed 
        };
    }; 
    return currentSpeeds / racers.length; 
};

export function getFasterRacer(racerA : Racer, racerB : Racer) : Racer | null {
    if(racerA.speed > racerB.speed) {
        return racerA;
    } else if(racerA.speed < racerB.speed){
        return racerB;
    } else {
        return null;
    };

};

