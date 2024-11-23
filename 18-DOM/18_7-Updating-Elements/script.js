'use strict';

function replaceItem1 () {
    const firstItem = document.querySelector(`li:first-child`); // Selects the first item
    const li = document.createElement(`li`); // Creates a new item
    li.textContent = `Updated item 1`; // Creates a new item
    firstItem.replaceWith(li); // Replaces the first item with the new item
}
//replaceItem1();

function replacerItem2 () {
    const secondItem = document.querySelector('li:nth-child(2)');
    // secondItem.innerText = "Updated item 2";
    // Eğer ki outherHTML kullanırsak li elementini eklememiz gerekir.
    secondItem.outerHTML = "<li> Updated item 2 </li>"
    // sayfa içinde liste olarak gözükecektir eğer ki liste içerisine almasaydık liste olarak gözükmeyecelti
}
//replacerItem2();

function replaceAllItem () {
    const items = document.querySelector("li");

    for (let i = 0; i < items.length; i++) {
        items[i].innerText = `heyselam ${i}`;
    }
}
replaceAllItem();