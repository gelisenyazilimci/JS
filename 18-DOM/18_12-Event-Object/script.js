'use strict';


const divs = document.querySelectorAll("div");

if (divs) {
    divs.forEach((div) => {
        div.style.background = "blue";
        div.style.width = "150px";
        div.style.height = "150px";

        // Her div'e tıklama eventi ekliyoruz
        div.addEventListener("click", (e) => {
            console.log(e);
        });
    });
}
