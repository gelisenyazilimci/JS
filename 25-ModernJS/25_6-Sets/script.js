"use strict";

const numbers = new Set();
console.log(numbers);

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add("4");
const arrays = [...numbers];
numbers.delete(2);
console.log(numbers.has(3)); // 3 bilgisi var mı ? varsaa "true" değerini verir.
console.log(numbers);