"use strict";

const numbers = [1, 2, 3, 4, 5, 31, 69];

const tekSayiKontrol = (number) => number % 2 === 1;


// For ile filtreleme


// for (let i = 0; i < numbers.length; i++) {
//     const kontrol = tekSayiKontrol(numbers[i]);
//     if (kontrol) console.log(numbers[i]);
// }

// filter komutu ile filtreleme

// console.log(numbers.filter(tekSayiKontrol))
//veya
// const tekSayilar = sayilar.filter((number) => number % 2 === 1);

// map ile kontrol etme (aslında bu hangi sayı tek ise bize true değerini döndürür. Eğer ki o sayı tek değilse false değerini döndürür.)

// console.log(numbers.map((number) => number % 2 === 1));

const urunler = [
    {urunAdi: "Iphone 13", fiyatBilgisi : 133333},
    {urunAdi: "Iphone 14", fiyatBilgisi : 133333},
    {urunAdi: "Iphone 15", fiyatBilgisi : 133333},
    {urunAdi: "Iphone 16", fiyatBilgisi : 1333333}
];


console.log(urunler.map(urunler => urunler));

// fiyatı 133333TL den büyük olan ürünün adını filtreler.
// const ozelFiltreleme = urunler.filter(urunler => urunler.fiyatBilgisi > 133333).map(urunler => urunler.urunAdi);
// console.log(ozelFiltreleme);

// Geri dönecek  olan sonuç deği, içerisindeki tek bir obje ya da tek bir değer gelsin diyorsanız onun da yolu var :)
// const tekBirObje = urunler.filter(urun => urun.fiyatBilgisi > 133333);
// Yukarıdaki gibi sadece ürünün adını değil indexi ile ilgileniyorum ve tek bir değer gelsin diyorsanız
// const indexBilgi = urunler.findIndex(urunler => urunler.fiyatBilgisi > 133333);