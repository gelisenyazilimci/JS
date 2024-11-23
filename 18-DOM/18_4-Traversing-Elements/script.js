'use strict';

let sonuc;
const parent = document.querySelector(".parent");

sonuc = parent.children; // Output: HTMLCollection(3) [div.child, div.child, div.child]
console.log(sonuc);

sonuc = parent.children[0]; // Output: <div class="child">Child 1</div>
console.log(sonuc);

sonuc = parent.children[0].innerText; // Output: Child 1
console.log(sonuc);

sonuc = parent.children[0].className; // Output: child
console.log(sonuc);

sonuc = parent.children[0].classList; // Output: DOMTokenList(1) ["child"]
console.log(sonuc);

sonuc = parent.children[0].nodeName; // Output: DIV (büyük harfle)
// Node name ile elementin türünü öğrenebiliriz.
console.log(sonuc);

parent.children[1].innerText = "Child 2 Güncellendi"; // Output: Child 2 Güncellendi
parent.children[1].style.color = "red"; // Output: Child 2 rengi kırmızı olacak