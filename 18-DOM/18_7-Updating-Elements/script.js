'use strict';

function replaceItem1 () {
    const firstItem = document.querySelector(`li:first-child`); // Selects the first item
    const li = document.createElement(`li`); // Creates a new item
    li.textContent = `Updated item 1`; // Creates a new item
    firstItem.replaceWith(li); // Replaces the first item with the new item
}
replaceItem1();