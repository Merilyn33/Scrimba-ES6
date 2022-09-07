
const word1 = 'Merilyn';
const word2 = 'Merisalu';

//const fullName = word1 + ' ' + word2;
/* const fullName = `${word1} ${word2}`
console.log(fullName); */

// Multiline string

/* const example = 'Hello, \n' + 'world!';
console.log(example); */

/* const example = 'Hello, \n' + 'world!';
const sentence = document.getElementById("example"); */

const sentence = document.getElementById("example");

const example = `${word1}
${word2}`
sentence.innerText += example;

// Destructuring objects

const personalInformation = {
    firstName: "Merilyn",
    lastName: "Merisalu",
    city: "Tallinn",
    state: "Harjumaa",
    zipcode: "10117"
};

const {firstName:fn, lastName:ln} = personalInformation;
console.log(`${fn} ${ln}`);

const player = {
    fullName: "Lebron James",
    club: "LA Lakers",
    address: {
        city: "Los Angeles",
    }     
    
};

//console.log(player.fullName);
const {fullName, club:c, address:{city}} = player;
//console.log(`${fullName} plays for ${c}`);
console.log(`${fullName} lives in ${city}`);