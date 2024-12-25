"use strict";

const students = new Map();

// console.log(students); // Output: Map(0)

students.set(1, "Ramadan");
students.set("Ramadan", "3169");
students.set("Ramadans", true);
console.log(students);
console.log(students.get(1))
console.log(students.get("Ramadans"))
console.log(students.get("Ramadan"))

let sonuc;
sonuc = students.size;
sonuc = students.has(2);
sonuc = students.delete(1);
sonuc = students.size;
sonuc = students.clear();