'use strict';

// 1 - insertAdjacentElement

function insertElement () {
    const ul = document.querySelector("#myList");
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjacentElement";
    ul.insertAdjacentElement("beforebegin", h1);
}
insertElement()

// 2 - insertAdjacentText

function insertText () {
    const item = document.querySelector("li:first-child"); // first item

    item.insertAdjacentText("afterbegin", "🚀 ");
    item.insertAdjacentText("beforeend", " 🚀");
}
insertText();

// 3 - insertAdjacentHTML

function insertHTML () {
    const item = document.querySelector("li:last-child"); // last item
    item.insertAdjacentHTML("afterend", "<li style='list-style-type: none '>🚀 New Item 🚀</li>");


}
insertHTML();

// 4 - insertBefore

function insertBefore () {
    const ul = document.querySelector("#myList");
    const li  = document.createElement("li");
    li.textContent = "insertBefore";
    const secondLi = document.querySelector("li:nth-child(2)");
    ul.insertBefore(li, secondLi);
}
insertBefore();