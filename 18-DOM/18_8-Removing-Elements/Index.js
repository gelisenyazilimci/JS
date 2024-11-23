'use strict';

// Direkt h1 içerisindeki elemenleri silmek için direkt kendisini sileriz burada

function clearHeader () {
    const h1 = document.querySelector("h1");
    h1.remove();
}
// clearHeader();

// Burada ise ul elemanın içerisinde ilk li elemanını silmek için kullanırız.
function removeItem1 () {
    // const liFirstItem =  document.querySelector("li:first-child")
    // liFirstItem.remove();

    const ul = document.querySelector("ul");
    const liFirstItem =  document.querySelector("li:first-child");
    ul.removeChild(liFirstItem);
}
// removeItem1();

// Burada ise belirli sıradaki itemi silmek için dışarıdan bir numara atıyoruz.
// Örnek olarak 3. sıradaki itemi atadık burada.
function removeF (number) {
    const ul = document.querySelector ("ul");
    const item = document.querySelector(`ul:nth-child(${number})`);
    ul.removeChild(item);
}
// removeF(3);

function removeAllItems () {
    // // 1. Yöntem
    // const ul = document.querySelector("ul");
    // if (ul.innerText === ""){
    //     do {
    //         ul.removeChild(ul.firstChild);
    //     } while (ul.firstChild);
    // }

    // 2. Yöntem (Nedense bu yöntemi beğenemedim ve sanırsam kendim de kullanmayacam. )
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    // Ama hepsinin bir anda silinmesi için kullanılabilir pek işlevsel algılayamadım nedense.
}
removeAllItems();


