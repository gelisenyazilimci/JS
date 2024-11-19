const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2024;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 46 13
// 92 4.6 8
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// Jonas Schmedtmann

let x = 10 + 5;
console.log(x); // 15
x+=10; // x = x + 10 = 25
x*=4; // x = x * 4 = 100
console.log(x); // 100
x++; // x = x + 1 = 101
console.log(x); // 101
x--; // x = x - 1 = 100
console.log(x); // 100

// Comparison operators
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // false
// >, <, >=, <=
console.log(now - 1991 > now - 2024); // true

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2024); // true


let massMark, heightMark, massJohn, heightJohn;
let BMIMark  = massMark / (heightMark**2);
let BMIJohn = massJohn / (heightJohn**2);

/* TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.*/
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;
