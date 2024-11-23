'use strict';

let sonuc;

sonuc = document.all; // Tüm elementleri getirir.
sonuc = document.all[10]; // 10. elementi getirir.
sonuc = document.all.length; // Element sayısını getirir.
sonuc = document.documentElement; // Html elementini getirir.
sonuc = document.head; // Head elementini getirir.
sonuc = document.body; // Body elementini getirir.
sonuc = document.doctype; // Doctype elementini getirir.
sonuc = document.body.children; // Body elementinin çocuklarını get
sonuc = document.doctype; // Doctype elementini getirir.

sonuc = document.forms; // Form elementlerini getirir.

console.log(sonuc);