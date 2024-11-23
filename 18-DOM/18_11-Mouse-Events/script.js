'use strict';

const divClass = document.querySelector('.special-div');
const div = document.querySelector("div");
const img = document.querySelector("img");
if (divClass) {
    div.style.backgroundColor = 'peru';
    div.style.width = '350px';
    div.style.height = '150px';
}

const onClick = function() {
    console.log("onclick")
}


const onTextMenu = function () {
    console.log("onTextMenu")
}

const mouseDown = function () {
    console.log("Test");
}

function mouseEnter () {
    console.log("mouseEnter")
}

function mouseMove () {
    console.log("mouseMove")
}

function onDrag () {
    console.log("onDrag")
}

// Tek tıklama ile Event çağrımı
// div.addEventListener("click", onClick);

//Çift tıklama ile Event çağrımı
// div.addEventListener("dblclick", onClick)

// Kullanıcı Faresinin sağ tıklama ile bir event çağrılabilir.
// div.addEventListener("contextmenu", onTextMenu)

// Kullanıcı Faresinin sol tuşu ile tıklaması bir event başlatılabilir.
// click type'ndan daha hızlı çalışır!
// div.addEventListener("mousedown", mouseDown);

// Kullanıcı div'in kapladığı alana girdiği zaman otomatik olarak kendi kendiliğinden başlar
// Bu projede ise kutunun içerisine girdiği zaman başlar.
// div.addEventListener("mouseenter", mouseEnter);

// Kullanıcı div'in içerisinde faresini dolaştırdığı zaman anlık olarak çalışmaya başlar ve kullanıcı div'in içerisinden çıktığı zaman otomatik olarak durur.
// div.addEventListener("mousemove", mouseMove)

// Resmi sürüklediğiniz an çalışmaya başlar
// img.addEventListener("drag", onDrag)