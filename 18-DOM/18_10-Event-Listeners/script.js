'use strict';

// Buradaki amacımız kullanıcı butona tıkladığı zaman konsolda HelloWorld yazısını görsün

// 1. yöntem

// const mesajGoster = function () {
//     console.log("HelloWorld")
// }


// 2. yöntem

const mesaj = document.getElementById("mesaj")


const button = document.querySelector("button");
button.addEventListener("click", mesajGoster);

const mesajGoster = function () {
     console.log(mesaj.value)
     mesaj.value = "";
 }