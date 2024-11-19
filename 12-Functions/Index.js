`use strict`;
function logger () {
    console.log("Hello World");
}
// calling / running / invoking the function
logger();
logger();
logger();
// Output: (Hello World) x 3

function fruitProcessor (apples, oranges) {
    `use strict`;
    return console.log(`Juice with ${apples} apples and ${oranges} oranges`);
}

fruitProcessor(5, 0); // Output: Juice with 5 apples and 0 oranges

function add (num1, num2) {
    return num1 + num2;
}

const sum = add(5, 1);
console.log(sum); // Output: 6


// Function Declaration
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function Expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2); // Output: 46 46

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear; // one parameter and one line of code in the function body.
// Soru: neden return ekleyemiyoruz ?
// Sebeb:  çünkü arrow function tek bir satırda işlem yapar ve return eder.

const age3 = calcAge3(1992);
console.log(age3); // Output: 45

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
// Soru: neden tirnak içinde yazdık ?
// Sebeb: çünkü template literals kullanıyoruz.
const retirement = yearsUntilRetirement(1991, "Ramazan");
console.log(retirement); // Output: Ramazan retires in 19 years

// Arrow Function and this keyword

const Ramazan = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
}

Ramazan.calcAge(); // Output: 46

//anonymous function

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

// Function inside a function

function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    return console.log(`Juice with ${applePieces} apples and ${orangePieces} oranges`);
}

