# JavaScript: Arrow Function Kullanımı
Arrow Function (Ok Fonksiyonu), ES6 ile JavaScript'e eklenmiş, modern ve kompakt bir fonksiyon tanımlama yöntemidir. Bu fonksiyonlar, daha kısa bir sözdizimine sahiptir ve özellikle `this` bağlamıyla ilgili avantajları nedeniyle popülerdir.

---

## Arrow Function Nedir ? 
Arrow Function, geleneksel tanımlamalara kıyasla daha kısa bir sözdizimi sağlar. 'function' anahtar kelimesi yerine '=>'
(ok) sembolü kullanılır.

### Temel Yapı:

```javascript
(parametre1, parametre2) => {
    // fonksiyon gövdesi
}
```

Eğer tek bir parametre varsa, parantezler isteğe bağlıdır. Gövde tek bir ifade içeriyorsa, '{}' süslü parantezler
kullanılmadan doğrudan döndürme işlemi yapabilir.

---

## Avantajları nelerdir ?

1. **Daha Kısa Yazım:**
    - Geleneksel bir fonksiyon:
```javascript
   function topla (a, b) {
        return a + b;
   }
```
   - Arrow function ile aynı fonksiyon:
```javascript
const topla = (a, b) => a+b;
```

2. **'this' Bağlamının Sabitliği:**

- Arrow Functions, kendi `this` bağlamını almaz. Bu, genellikle callback fonksiyonlarda 
`this` bağlamı ile ilgili sorunların önüne geçer.
   ```javascript
     const nesne = {
       isim: "Arrow Function Örneği",
       normalFonksiyon: function() {
         setTimeout(function() {
           console.log(this.isim); // undefined, çünkü `this` global bağlama işaret eder.
         }, 1000);
       },
       arrowFonksiyon: function() {
         setTimeout(() => {
           console.log(this.isim); // "Arrow Function Örneği", çünkü `this` dış bağlamı korur.
         }, 1000);
       }
     };

     nesne.normalFonksiyon();
     nesne.arrowFonksiyon();
     ```

3. **Daha Temiz Callback Kullanımı:**
    - Özellikle `map`, `filter`, ve `reduce` gibi dizilerle çalışırken daha okunaklı bir yazım sağlar.
      ```javascript
      const sayilar = [1, 2, 3, 4];
      const kareler = sayilar.map(sayi => sayi ** 2);
      console.log(kareler); // [1, 4, 9, 16]
      ```

---

## Detaylı Kullanım

### 1. Parametresiz Fonksiyonlar
Parametre gerektirmeyen bir fonksiyon tanımlamak için boş parantezler kullanılır.

```javascript
const merhaba = () => console.log("Merhaba Dünya!");
merhaba(); // "Merhaba Dünya!"
```

### 2. Tek Parametre
Tek bir parametre varsa, parantezler isteğe bağlıdır.

```javascript
const karesi = x => x ** 2;
console.log(karesi(5)); // 25
```

### 3. Çoklu Parametre
Birden fazla parametre olduğunda, parantezler zorunludur.

```javascript
const carpim = (a, b) => a * b;
console.log(carpim(3, 4)); // 12
```

### 4. Süslü Parantezsiz Gövde
Eğer fonksiyon tek bir ifade döndürüyorsa, `{}` süslü parantezler kullanılmadan daha kısa bir yazım yapılabilir.

```javascript
const toplama = (a, b) => a + b;
console.log(toplama(7, 8)); // 15
```

### 5. Süslü Parantezli Gövde
Birden fazla ifade varsa veya fonksiyonun karmaşık bir mantığı varsa, süslü parantez kullanılır.

```javascript
const selamla = (isim) => {
  const mesaj = `Merhaba, ${isim}!`;
  console.log(mesaj);
};
selamla("Ahmet"); // "Merhaba, Ahmet!"
```

### 6. Nesne Döndürmek
Arrow Function ile nesne döndürmek için dikkatli olunmalıdır. Süslü parantezler yerine, nesneyi `()` parantezleri içine almanız gerekir.

```javascript
const bilgi = (isim, yas) => ({ isim, yas });
console.log(bilgi("Ayşe", 25)); // { isim: "Ayşe", yas: 25 }
```

---

## Ne Zaman Kullanılmalı?

- **Callback Fonksiyonlarda:** Özellikle `this` bağlamını koruması gerektiğinde.
- **Kısa ve Tek Satırlık Fonksiyonlar:** Yazımı basitleştirmek ve kodun okunabilirliğini artırmak için.
- **Dizi İşlemleri:** `map`, `filter`, `reduce` gibi fonksiyonlarda kullanım için.

---

## Arrow Function Kullanırken Dikkat Edilmesi Gerekenler

1. **`this` Bağlamı:** Arrow Functions, kendi `this` bağlamını almadığından, durumun gerekliliğine göre kullanılmalıdır. Örneğin, bir nesne yöntemi olarak kullanılmaları önerilmez.
   ```javascript
   const nesne = {
     isim: "Örnek",
     fonksiyon: () => {
       console.log(this.isim); // undefined
     }
   };
   nesne.fonksiyon();
   ```

2. **Karmaşık İşlemler İçin Uygun Olmaması:** Çok fazla mantık içeren fonksiyonlar için geleneksel fonksiyonlar daha okunaklı olabilir.

---