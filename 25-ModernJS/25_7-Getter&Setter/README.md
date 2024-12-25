# JavaScript: Getter ve Setter

Getter ve Setter, bir nesnenin özelliklerine erişimi veya bu özelliklerin değerlerini ayarlamayı kontrol etmek için kullanılan özel metotlardır. ES6 ile birlikte gelen bu özellik, nesne odaklı programlama yaklaşımlarını daha güçlü hale getirir.

---

## Getter ve Setter Nedir?

- **Getter:** Bir nesnenin özelliğine erişildiğinde bir işlem gerçekleştirir ve sonuç döner.
- **Setter:** Bir nesnenin özelliğine bir değer atandığında özel bir işlem gerçekleştirir.

### Neden Kullanılır?

1. **Kontrollü Erişim:** Özelliklere doğrudan erişimi sınırlayarak, veri üzerinde işlem yapılmasını sağlar.
2. **Veri Doğrulama:** Özelliklere değer atanırken doğrulama yapmak için kullanılır.
3. **Daha Temiz Sözdizimi:** Fonksiyon çağırmak yerine, özelliklere erişim gibi görünecek şekilde kullanılabilir.

---

## Getter ve Setter Kullanımı

Getter ve Setter tanımlamak için `get` ve `set` anahtar kelimeleri kullanılır.

### Temel Örnek

```javascript
const kisi = {
  ad: "Ahmet",
  soyad: "Yılmaz",

  // Getter
  get tamAd() {
    return `${this.ad} ${this.soyad}`;
  },

  // Setter
  set tamAd(deger) {
    const [yeniAd, yeniSoyad] = deger.split(" ");
    this.ad = yeniAd;
    this.soyad = yeniSoyad;
  }
};

console.log(kisi.tamAd); // "Ahmet Yılmaz"
kisi.tamAd = "Mehmet Demir";
console.log(kisi.ad);    // "Mehmet"
console.log(kisi.soyad); // "Demir"
```

### ES6 Sınıfları ile Kullanım

Getter ve Setter, sınıflar içinde de kullanılabilir.

```javascript
class Kisi {
  constructor(ad, soyad) {
    this._ad = ad;
    this._soyad = soyad;
  }

  // Getter
  get tamAd() {
    return `${this._ad} ${this._soyad}`;
  }

  // Setter
  set tamAd(deger) {
    const [ad, soyad] = deger.split(" ");
    this._ad = ad;
    this._soyad = soyad;
  }
}

const kisi = new Kisi("Ayşe", "Kara");
console.log(kisi.tamAd); // "Ayşe Kara"
kisi.tamAd = "Zeynep Ak";
console.log(kisi.tamAd); // "Zeynep Ak"
```

### Get ve Set ile Veri Doğrulama

Setter, atanacak değer üzerinde işlem veya doğrulama yapabilir.

```javascript
class Urun {
  constructor(ad, fiyat) {
    this._ad = ad;
    this._fiyat = fiyat;
  }

  get fiyat() {
    return `${this._fiyat} TL`;
  }

  set fiyat(yeniFiyat) {
    if (yeniFiyat < 0) {
      console.error("Fiyat negatif olamaz!");
      return; // undefined
    } else {
      this._fiyat = yeniFiyat;
    }
  }
}

const urun = new Urun("Telefon", 5000);
console.log(urun.fiyat); // "5000 TL"
urun.fiyat = -100;       // "Fiyat negatif olamaz!"
console.log(urun.fiyat); // "5000 TL"
```

---

## Neden `_ad ve _fiyat` Kullandık?

`_ad` gibi bir yazım stili, genellikle **özel (private) veya gizli** olarak kabul edilen değişkenleri işaretlemek için kullanılır. Bu, JavaScript'te doğrudan gizlilik sağlamaz, ancak bir konvansiyon olarak, `_` ile başlayan değişkenler genelde sınıfın dışından erişilmemesi gerektiğini belirtir.

### 1. **Getter ve Setter Çakışmasını Önlemek**
- Eğer `this.ad` şeklinde bir değişken kullanılsaydı, `get ad` ve `set ad` metotlarıyla çakışma olabilirdi. `_ad` kullanmak bu çakışmayı engeller.
- Örneğin:
  ```javascript
  class Kisi {
    constructor(ad) {
      this.ad = ad; // Sorun yaratabilir
    }

    get ad() {
      return this.ad; // Sonsuz döngüye girer!
    }
  }
  ```

### 2. **Kapsülleme ve Gizlilik**
- `_ad`, değişkenin dışarıdan doğrudan erişilmemesi gerektiğini işaret eder.
- Dış dünyadan `kisi._ad` yerine `kisi.ad` gibi getter/setter yöntemleri üzerinden erişim sağlanır.

### 3. **Konvansiyon**
- `_` ile başlayan değişkenler, birçok programlama dilinde **özel (private)** olarak kabul edilir. JavaScript'te bu bir standart değildir, ancak ekipler arasında anlaşılmış bir kodlama pratiğidir.

---

## Alternatif Çözüm: Özel Değişkenler için `#`

ES2022 ile JavaScript'e gerçek özel alanlar için `#` kullanımı eklendi:

```javascript
class Kisi {
  #ad;
  #soyad;

  constructor(ad, soyad) {
    this.#ad = ad;
    this.#soyad = soyad;
  }

  get tamAd() {
    return `${this.#ad} ${this.#soyad}`;
  }

  set tamAd(deger) {
    const [ad, soyad] = deger.split(" ");
    this.#ad = ad;
    this.#soyad = soyad;
  }
}

const kisi = new Kisi("Ali", "Can");
console.log(kisi.tamAd); // "Ali Can"
kisi.tamAd = "Veli Han";
console.log(kisi.tamAd); // "Veli Han"  
```

Bu yöntemle, `#ad` ve `#soyad` değişkenleri tamamen özel hale gelir ve sınıf dışından erişim mümkün olmaz.

---

## Avantajları

1. **Kapsülleme:** Veriye erişimi kontrol ederek nesne üzerinde daha fazla güvenlik sağlar.
2. **Dinamik İşlemler:** Veri üzerinde işlem yaparak, istenen formatta döndürülmesini sağlar.
3. **Okunabilirlik:** Özelliklere erişim veya ayar işlemleri daha temiz bir şekilde yapılır.

---

## Getter ve Setter ile İlgili İpuçları

1. **Fonksiyon Gibi Görünmezler:** Getter ve Setter, fonksiyon gibi çağrılmaz; normal bir özellikmiş gibi erişilir.
   ```javascript
   console.log(kisi.tamAd); // "Ayşe Kara"
   kisi.tamAd = "Zeynep Ak";
   ```

2. **Performans Dikkati:** Getter, her erişimde bir işlem yaptığından, ağır işlemler barındırmamalıdır.
3. **Özellik Gizleme:** Getter ve Setter, `private` veya `_` ile başlayan değişkenler üzerinden çalıştırılabilir.

---

## Getter ve Setter ile Object.defineProperty Kullanımı

`Object.defineProperty` metodu ile de Getter ve Setter tanımlanabilir.

```javascript
const obje = {};

Object.defineProperty(obje, "tamAd", {
  get() {
    return `${this.ad} ${this.soyad}`;
  },
  set(deger) {
    const [ad, soyad] = deger.split(" ");
    this.ad = ad;
    this.soyad = soyad;
  }
});

obje.ad = "Ali";
obje.soyad = "Can";
console.log(obje.tamAd); // "Ali Can"
obje.tamAd = "Veli Han";
console.log(obje.ad);    // "Veli"
console.log(obje.soyad); // "Han"
```

---



## Kısa anlamları ile şu şekilde akılda tutulabilir.
- **Getter:** Alıcı veya Erişimci olarak çevrilebilir. Bir nesne özelliğini okumak, yani değeri almak için kullanılan bir işlevi ifade eder.
- **Setter:** Ayarıcı veya Değer Atayıcı olarak çevrilebilir. Bir nesne özelliğine yeni bir değer atamak, yani değeri 
ayarlamak için kullanılan bir işlevi ifade eder.



## Özet

- **Getter ve Setter**, nesneler ve sınıflar için özel metotlar tanımlamanıza olanak sağlar.
- **Getter:** Özelliklere erişim sırasında işlem yapar ve değer döner.
- **Setter:** Özelliklere değer atanırken özel işlemler yapar.
- **Kullanım Alanları:** Veri doğrulama, kapsülleme, dinamik veri işlemleri.


Getter ve Setter, JavaScript'in modern uygulamalarında hem okunabilirliği artırır hem de kodun daha güvenli ve kontrollü olmasını sağlar.


