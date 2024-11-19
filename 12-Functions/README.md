
# JavaScript Fonksiyonlar

JavaScript'te fonksiyonlar, belirli bir görevi gerçekleştirmek için kullanılan yeniden kullanılabilir kod bloklarıdır. Fonksiyonlar, bir veya birden fazla işlem yapmak için oluşturulabilir ve gerektiğinde tekrar çağrılabilir.

---

## Fonksiyon Tanımlama Yöntemleri

### 1. Function Declaration (Fonksiyon Bildirimi)
`function` anahtar kelimesiyle tanımlanan bir fonksiyondur. Bu fonksiyon, tanımlandığı bloktan önce çağrılabilir (hoisting).

```javascript
function topla(a, b) {
    return a + b;
}

console.log(topla(5, 3)); // 8
```

### 2. Function Expression (Fonksiyon İfadesi)
Bir fonksiyon, bir değişkene atanarak tanımlanabilir. Bu tür fonksiyonlar, yalnızca tanımlandıktan sonra çağrılabilir.

```javascript
const carp = function(a, b) {
    return a * b;
};

console.log(carp(4, 2)); // 8
```

### 3. Arrow Functions (Ok Fonksiyonları)
ES6 ile gelen modern bir fonksiyon yazım şeklidir. Daha kısa bir sözdizimi sunar ve `this` bağlamını otomatik olarak bağlar.

```javascript
const bol = (a, b) => a / b;

console.log(bol(10, 2)); // 5
```

### 4. Immediately Invoked Function Expression (IIFE)
Tanımlandığı anda çalışan fonksiyonlardır. Genellikle parantez içine alınarak yazılır.

```javascript
(function() {
    console.log("Bu bir IIFE'dir.");
})();
```

---

## Fonksiyon Parametreleri

### Varsayılan Parametre Değerleri
Bir parametre verilmediğinde kullanılacak varsayılan değerler atanabilir.

```javascript
function merhaba(isim = "Ziyaretçi") {
    console.log(`Merhaba, ${isim}!`);
}

merhaba(); // Merhaba, Ziyaretçi!
merhaba("Ali"); // Merhaba, Ali!
```

### Rest Parametreleri
Fonksiyonun birden fazla argüman almasını sağlar.

```javascript
function topla(...sayilar) {
    return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(topla(1, 2, 3, 4)); // 10
```

---

## Fonksiyonların Özellikleri

### 1. İlk Sınıf Vatandaş (First-Class Citizens)
JavaScript'te fonksiyonlar, bir değişkene atanabilir, bir başka fonksiyona argüman olarak geçebilir veya bir fonksiyondan döndürülebilir.

```javascript
const mesaj = function() {
    return "Merhaba Dünya!";
};

console.log(mesaj());
```

### 2. Callback Fonksiyonları
Bir fonksiyon, başka bir fonksiyonun parametresi olarak kullanılabilir.

```javascript
function islem(yapilacakIslem, a, b) {
    return yapilacakIslem(a, b);
}

const toplama = (a, b) => a + b;
const carpma = (a, b) => a * b;

console.log(islem(toplama, 4, 5)); // 9
console.log(islem(carpma, 4, 5)); // 20
```

### 3. Anonim Fonksiyonlar
İsmi olmayan fonksiyonlardır ve genellikle bir başka fonksiyonun içinde kullanılır.

```javascript
setTimeout(function() {
    console.log("Bu bir anonim fonksiyondur.");
}, 1000);
```

---

## Arrow Function ile `this` Bağlamı

Arrow function, kendine ait bir `this` bağlamına sahip değildir. Bu durum, özellikle callback'ler içinde faydalıdır.

```javascript
function Kutu() {
    this.deger = 10;

    setTimeout(() => {
        console.log(this.deger); // 10
    }, 1000);
}

new Kutu();
```

---

## Fonksiyonların Avantajları

1. **Kod Tekrarını Azaltır:** Fonksiyonlar, tekrar eden kodları bir araya getirerek daha düzenli bir yapı sağlar.
2. **Yeniden Kullanılabilirlik:** Bir fonksiyon, birden fazla yerde kullanılabilir.
3. **Bakımı Kolaylaştırır:** Kodun okunabilirliği ve yönetimi kolaylaşır.

---

## Kaynaklar
- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- JavaScript resmi dokümantasyonu

---
