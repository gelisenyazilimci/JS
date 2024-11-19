`use strict`;
const friends = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
console.table(friends);
const years = new Array(1, 2, 3, 4, 5);
console.table(years);

console.log(friends.length);
console.log(years.length);
console.log(friends[0]);
console.log(friends[1]);

friends[1] = 'Kiwi';
console.log(friends);
friends[3] = 'Chelsy';
console.log(friends[3]);

// bir öğeyi sonradan değiştirmek için let kullanılır. Const ile değiştirilemez. const başlangıçta tanımlanır ve değiştirilemez.!
// Const içeren array değerlerini değiştirebilirsiniz.
// ama komple arrayi değiştiremezsiniz.

// sonradan komple arrayi değiştirmek için let kullanılır.


// Array içinde string ve number değerler olabilir. Ama genelde aynı türde veriler kullanılır.
// Array içinde array olabilir. Array içinde object olabilir. Object içinde array olabilir. Object içinde object olabilir.
// Array içinde function olabilir. Object içinde function olabilir.


console.table(friends); // table ile arrayi tablo şeklinde görebiliriz.
const newlength = friends.push('Chelsy'); // push() sona ekler.
console.log(friends);
console.log(newlength);

const deletedElement = friends.pop(); // pop() son elemanı siler.
friends.unshift('Chelsy'); // unshift() başa ekler.
console.log(friends);
console.log(deletedElement);

friends.shift(); // shift() baştaki elemanı siler.
console.log(friends); // shift() ve unshift() çok kullanılmaz. Çünkü arrayin başından ve sonundan silme işlemi yapar. Bu işlem çok yavaştır. Çünkü arrayin elemanlarını kaydırır.
// Bu yüzden push() ve pop() kullanılır. Çünkü arrayin sonundan ekleme ve silme işlemi yapar. Bu işlem hızlıdır. Çünkü arrayin sonuna eleman ekler

// arrayin herhangi bir yerine eleman eklemek için splice() kullanılır.
// splice() 3 parametre alır. İlk parametre eklenecek elemanın index numarası, 2. parametre 0 olacak. 3. parametre eklenecek elemanın adı.

friends.splice(1, 0, 'Kongo'); // 1. indexe Kongo ekler. 2. parametre 0 olacak. 3. parametre eklenecek elemanın adı.
// 2. Parametre neden 0 ?
// splice() 3 parametre alır. 2. parametre kaç eleman silineceğini belirtir. 0 olursa silme işlemi yapmaz. Sadece ekleme işlemi yapar.
// 0 dan farklı bir değer girilirse o index numarasından itibaren o kadar eleman siler.
console.log(friends);

friends.splice(2, 1 , 'Kongo'); // 2. index numarasından itibaren 1 eleman siler ve yerine Kongo ekler.
console.log(friends);

// includes() array içinde eleman var mı yok mu kontrol eder. Boolean değer döner.
console.log(friends.includes('Poly')); // Output: false
console.log(friends.includes('Kongo')); // Output: true

// join () arrayi stringe çevirir. İçine parametre alabilir. Parametre olarak stringin arasına ne koyulacağını belirtir.

const string = friends.join(' - ');
console.log(string);

// indexOf() elemanın index numarasını verir. Eğer eleman yoksa -1 döner.
const dizi = ['a', 'b', 'c', 'd', 'e'];
console.log(dizi.indexOf('c')); // Output: 2

// concat() arrayleri birleştirir.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3); // Output: [1, 2, 3, 4, 5, 6]