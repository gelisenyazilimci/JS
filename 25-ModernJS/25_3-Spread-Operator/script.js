"use strict";

const msj = ["bu", "bir", "test", "yazisidir"];

// Spread Operator Kullanmadan yan yana yazdırma.

//
// let sonuc = "";
//
// for (let x of msj) sonuc += x + " ";
// console.log(sonuc)

// Spread Operator Kullanarak yan yana yazdırma.

console.log(...msj);

// Spread Operator Genellikle dizi elemanlarini kopyalamaya işinde işimize yarıyor.

//
// const array1 = ["1", "2"];
// const array2 = ["3", "4"];
// const array3 = [...array1, ...array2, "5"];


const numbers1 = ["1", "2", "3"];
// const numbers2 = numbers1; // referans olarak kopyalama işlemi yapıldı.


const numbers2 = [...numbers1];

numbers1[0] = 10;
console.log(numbers1, numbers2)

const user = {
    username: "Burak",
    email: "test@test.com"
}

const userAddress = {
     city: "Istanbul"
}

console.log(...user, ...userAddress);

// Rest Parameters

function equals (...arg) {
    let sonuc = 0;
    for (let x of arg) {
        sonuc += arg;
    }
    return sonuc;
}


console.log(equals(19, 10, 31));
console.log(equals(19, 10, 31, 69));