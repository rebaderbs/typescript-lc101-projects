import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    massKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number)   {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
    // Returns the sum of all items using each item's massKg property
        let sum: number = 0;
        for (let i = 0; i < items.length; i++)  {
            sum += items[i].massKg;
        }    
        return sum;
    }

    currentMassKg(): number {
    // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
            
    return 
    }

    canAdd(item: Payload): boolean  {
    // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return 
    }

    addCargo(cargo: Cargo): boolean {
    // Uses this.canAdd() to see if another item can be added.
    //     If true, adds cargo to this.cargoItems and returns true.
    //     If false, returns false.
        return 
    }

    addAstronaut(astronaut: Astronaut): boolean {
    // Uses this.canAdd() to see if another astronaut can be added.
    //     If true, adds astronaut to this.astronauts and returns true.
    //     If false, returns false.  
        return 
    }


}


