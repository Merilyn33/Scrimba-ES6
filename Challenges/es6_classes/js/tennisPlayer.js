
import { Player } from "./Player.js";
export class TennisPlayer extends Player {
    constructor(name, country = "Argentina", age)
    {
        super(name, country);
        this.age = age;
    } 
    
    playerAge = () => console.log(`${this.name} is ${this.age} and knows how to play tennis!`);

};
