"use strict"

class Kisi {
    constructor(ad, dogumYili)
    {
        this.ad = ad;
        this.__dogumYili = dogumYili;
    }

    yasHesapla() {
        let tarih = new Date().getFullYear();
        return tarih - this.__dogumYili;
    }
}

class ogrenci extends Kisi{
    constructor(ad, dogumYili, okulNumarasi)
    {
        super(ad, dogumYili);
        this.okulNumarasi = okulNumarasi;



        // Aşaüıdaki gibi yazılırsa hata alınır, çünkü super() çağrısı yapılmadan önce this.okulNumarasi'na değer atanamaz.
        // JavaScript'te bir alt sınıfın constructor'ında super() çağrısı yapılmadan önce this kullanımı hataya yol açar.



        // this.okulNumarasi = okulNumarasi;
        // super(ad, dogumYili);

    }
}

let kisi = new Kisi("Ali", 3131);