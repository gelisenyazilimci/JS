"use strict";

// array destructuring

const example = ["bu", "bir", "test", "yazisidir"];
// let a = example[1];
// let b = example[2];

// Yukarıda teker teke ayrırmak yerine bu işlemde aynısını yapar.

let [a, b] = name;


console.log(a, b)


// object destructuring

let urun = {
    marka: "Apple",
    model: "Iphone 16 pro max",
    fiyat: "1090 Euro"
}

let {marka, model, fiyat} = urun;

console.log(marka, model, fiyat)