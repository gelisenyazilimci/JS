"use strict";

class Kisi {
    constructor(ad, meslek, dogumYili) {
        this.ad = ad;
        this.meslek = meslek;
        this.dogumYili = dogumYili;
    }

    yasHesapla() {
        let tarih = new Date().getFullYear();
        return tarih - this.dogumYili;
    }

    get ad() {
        return this._ad;
    }

    set ad(value) {
        if(value.length < 3) {
            console.log("ad için çok az karakter");
            return;
        }
        this._ad = value;
    }

    get dogumYili() {
        return this._dogumYili;
    }

    set dogumYili(value) {
        if (value < 1900 || value > new Date().getFullYear()) {
            console.log("tarih bilgisi yanlış")
            return;
        }
        this._dogumYili = value;
    }
}

let kisi1 = new Kisi("çınar","öğrenci",2020);

console.log(kisi1);
console.log(kisi1.ad);