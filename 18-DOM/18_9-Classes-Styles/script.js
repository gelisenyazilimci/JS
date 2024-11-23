'use strict';
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

function fn () {
    console.log("HelloWorld");
    h1.className = "title f22";
    h1.style.backgroundColor = "red";
}

button.addEventListener("click", fn);