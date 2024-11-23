'use strict';
// const li =  document.createElement("li");
// li.className = "item"; // Output: <li class="item"></li>
// li.id = 'item-1'; // Output: <li class="item" id="item-1"></li>
// li.setAttribute("data-id", "1"); // Output: <li class="item" id="item-1" data-id="1"></li> // data-id="1" eklendi
// li.innerText = "Item 4"; // Output: <li class="item" id="item-1" data-id="1">Item 4</li> // Item 4 eklendi
// document.getElementById('myList').appendChild(li); // Output: <li class="item" id="item-1" data-id="1">Item 1</li> // Item 1 eklendi
//
// const ch = document.createElement("input");
// ch.type = "checkbox";
// ch.className = "checkbox";
// li.appendChild(ch); // Output: <li class="item" id="item-1" data-id="1">Item 4<input type="checkbox" class="checkbox"></li> // checkbox eklendi
// console.log(ch); // Output: <input type="checkbox" class="checkbox"> // checkbox eklendi


function createList (text) {
    const li = document.createElement("li"); // Output: <li></li>
    li.className = "item" // Output: <li class="item"></li>
    li.innerText = `${text} <input type="checkbox">`; // Output: <li class="item">Item 4<input type="checkbox" class="checkbox"></li>
    document.getElementById("myList").appendChild(li); // Output: <li class="item">Item 4<input type="checkbox" class="checkbox"></li>
}

createList("Item 4");
createList("Item 5");