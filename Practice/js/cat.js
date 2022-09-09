import { Animal } from "./animal.js";


export class Cat extends Animal{

    /* constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;

    } */

    makeSound(sound = "meow") {
        console.log(sound);
    }
};