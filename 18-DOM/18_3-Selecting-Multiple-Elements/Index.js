'use strict';

let sonuc;

document.getElementsByClassName("item"); // Output: HTMLCollection(3) [li.item, li.item, li.item]
sonuc = document.getElementsByClassName("item")[0]; // Output: <li class="item">Item 1</li>
console.log(sonuc);

let items = document.getElementsByClassName("item");

// for döngüsü
for (let i = 0; i < document.getElementsByClassName("item").length; i++) {
    console.log(items[i]); // Output: <li class="item">Item 1</li> <li class="item">Item
}

// foreach ile döngü
Array.from(items).forEach(item => {
    console.log(item); // Output: <li class="item">Item 1</li> <li class="item">Item 2</li> <li class="item">Item 3</li>
});

// for of ile döngü
for (let item of items) {
    console.log(item); // Output: <li class="item">Item
}

Array.from(items).forEach(item => {
    item.style.color = "red"; // Output: Item 1, Item 2, Item 3 kırmızı renk olacak
    item.style.background = "#f4f4f4"; // Output: Item 1, Item 2, Item 3 arka plan rengi #f4f4f4 olacak
    item.style.padding = "10px"; // Output: Item 1, Item 2, Item 3 padding 10px olacak
    item.style.fontSize = "20px"; // Output: Item 1, Item 2, Item 3 font size 20px olacak
});


// xxsa sınıfında bulunan #aadd id'li elementleri seçme
const itemler = document.querySelectorAll("#group2 .item") // Output: NodeList(3) [li.item, li.item, li.item]

Array.from(itemler).forEach(item => {
    item.style.color = "blue";
    item.style.background = "black";
});