
/* const word1 = 'Merilyn';
const word2 = 'Merisalu';
 */
//const fullName = word1 + ' ' + word2;
/* const fullName = `${word1} ${word2}`
console.log(fullName); */

// Multiline string

/* const example = 'Hello, \n' + 'world!';
console.log(example); */

/* const example = 'Hello, \n' + 'world!';
const sentence = document.getElementById("example"); */

/* const sentence = document.getElementById("example");

const example = `${word1}
${word2}`
sentence.innerText += example; */

// Destructuring objects

/* const personalInformation = {
    firstName: "Merilyn",
    lastName: "Merisalu",
    city: "Tallinn",
    state: "Harjumaa",
    zipcode: "10117"
};
 */
/* const {firstName:fn, lastName:ln} = personalInformation;
console.log(`${fn} ${ln}`);

const player = {
    fullName: "Lebron James",
    club: "LA Lakers",
    address: {
        city: "Los Angeles",
    }     
    
}; */

//console.log(player.fullName);
// const {fullName, club:c, address:{city}} = player;
//console.log(`${fullName} plays for ${c}`);
// console.log(`${fullName} lives in ${city}`);

// Destructing Arrays

/* let [firstName, middleName, lastName] = ["Merilyn", "Coding God", "Merisalu"];
middleName = "Writer";
console.log(lastName);
console.log(middleName);
 */

// Object Literals
/* 
function addressMaker(city, state) {
    const newAddress = {city, state};
    console.log(newAddress);
}

addressMaker("Tallinn", "Harjumaa"); */

// For of loop

/* let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    total += income;
}
console.log(total); */

/* const fullName = "Merilyn Merisalu";

for(let char of fullName) {
    console.log(char);
} */

// Spread operator

/* let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = ["David",...contacts, "Lily"];
contacts.push("John");
console.log(personalFriends); */

/* let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
};

let employee =  {
    ...person,
    salary: 50000,
    position: "Software Developer"
};

console.log(employee);
 */

/* let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
example2.push(true);
console.log(example1); */

/* let example1 = {
    name: "Merilyn"
};
let example2 = {
    ...example1
} */

/* Rest operator */

/* function add(...nums) {
    console.log(nums);
}
add(1, 7, 19, 23, 30); */

// Arrow functions

 /* function add(...nums) {
    let total = nums.reduce(function(x,y) {
        return x + y;
    }) 
    console.log(total); */
//}
/* function add(...nums) {
    let total = nums.reduce((x, y) => x + y)
    return total;
}

console.log(add(4, 5, 7, 8, 12));  */

//function declaration
/* function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = food =>`I'm going to eat a ${food} for dinner.`;

console.log(dinnerMenu("chicken salad")); */

// default parameters

/* function add(numArray = []) {
    let total = 0;
    numArray.forEach(element => {
        total += element;
    } )
    
}
add(); */

/* const leadSinger = (artist="someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger("Chris Martin"); */

// includes

/* const numArray = [1, 2, 3, 4, 5, 6];
console.log(numArray.includes(7));
 */

// Let and const

/* if (false) {
    let example3 = 5;
}
console.log(example3) */

/* const example = 3;
example = 5;
console.log(example); */

/* The values of arrays and objects are mutable but their types are immutable */

// Import and export

/* import { data } from "./example.js";
const updatedData = data;
updatedData.push(5);
console.log(updatedData); */

// PadStart and padEnd

/* let example = "Merilyn";

console.log(example.padStart(10, 'M'));
console.log(example.padEnd(12, 'n')); */

// Classes

/* import { Animal } from "./animal.js";
import {Cat} from "./cat.js";
let mammal = new Animal(); */
/* cat.legs = 3;
cat.makeSound();
cat.makeSound("Meow");
console.log(cat);
console.log(cat.legs);
console.log(cat.type);
console.log(Animal.return10()) */

//console.log(cat.metaData);

/* let cat = new Cat("Cat", 4);
cat.makeSound();
console.log(cat.metaData); */

// Trailing Commas

/* function add(param1,) {
    const example = {
        name: "Merilyn",
    };
    console.log(example);
}
add(2); */

// Promises

const buyFlightTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if(error) {
                reject("Your payment was not successful!");
            }
            else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000);
    }
)}
buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error));