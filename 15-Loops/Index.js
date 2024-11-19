for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0,  1, 2, 3, 4


// continue içeren örnek yaz
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // 3 değeri atlandı
  }
  console.log(i);
}
// Output: 0, 1, 2, 4


// break içeren örnek yaz
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // 3 değeri geldiğinde döngü kırıldı
    }
    console.log(i);
}
// Output: 0, 1, 2

// forEach ile dizi üzerinde dönme
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});
// Output: 1, 2, 3, 4, 5
// Bu kısmı açıklar mısın ?
// forEach() metodu, bir dizi üzerinde her bir eleman için belirtilen bir fonksiyonu çağırır.
// number.length kadar yazdırdı.


// for...of ile dizi üzerinde dönme
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}
// Output: 1, 2, 3, 4, 5


// while döngüsü ile dizi üzerinde dönme
const numbers = [1, 2, 3, 4, 5];
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
// Output: 1, 2, 3, 4, 5


// do...while döngüsü ile dizi üzerinde dönme
const numbers = [1, 2, 3, 4, 5];
let a = 0;
do {
  console.log(numbers[a]);
  i++;
} while (a < numbers.length);
// Output: 1, 2, 3, 4, 5

