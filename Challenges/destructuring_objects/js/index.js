//**** Challenge ****
    /*
    For this challenge destruture the following object.
*/

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

/* console.log(`Student named ${student.name} is ${student.age} years old.
Projects: ${student.projects.diceGame}` ) */

const {name:n, age:a, projects:{diceGame}} = student;

console.log(`Student named ${n} is ${a} years old.`);
console.log(`He made a game called ${diceGame}.`);