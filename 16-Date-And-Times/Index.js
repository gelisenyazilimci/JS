let simdi = new Date();

// Get Methods
let sonuc = simdi;
sonuc = simdi.getDate(); // gün
sonuc = simdi.getDay(); // haftanın günü  0-6 arası => (0=Pazar 6=Cumartesi)
sonuc = simdi.getFullYear(); // yıl

// Set Methods
simdi.setFullYear(1995); // yıl
simdi.setMonth(11); // 0-11 arası
simdi.setDate(15); // gün

let dogumGunu = new Date(1995, 11, 15); // yıl, ay, gün

sonuc = simdi.getFullYear() - dogumGunu.getFullYear(); // yaş hesaplama

let milisaniye = simdi.getTime() - dogumGunu.getTime(); // milisaniye cinsinden fark
