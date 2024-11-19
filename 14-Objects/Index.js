const RamadanArray = [
    'Ramadan',
    'Sanar',
    2077 - 2024,
    ['Ramadan', 'Sanar', 2077 - 2024]
]

const RamadanObject = {
    firstName: 'Ramadan',
    lastName: 'Sanar',
    age: 2077 - 2024,
    family: ['Ramadan', 'Sanar', 2077 - 2024]
}

// Object Methods
///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: '31',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas); // Object

console.log(jonas.lastName); // Dot Notation
console.log(jonas['lastName']); // Bracket Notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // Bracket Notation
console.log(jonas['last' + nameKey]); // Bracket Notation

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas?' +
    ' Choose between firstName, lastName, age, job, and friends'); // Prompt

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]); // Bracket Notation
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends'); // Prompt
}

jonas.location = 'Portugal'; // Add New Property
jonas['twitter'] = '@gelisenyazilimci'; // Add New Property
console.log(jonas); // Object

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

