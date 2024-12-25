# JavaScript: Arrays (Diziler)

Diziler (Arrays), JavaScript'te birden fazla veriyi bir arada tutmak için kullanılan bir veri yapısıdır. Bir dizi, sıralı bir şekilde elemanları saklar ve elemanlara indeksler (sıfırdan başlar) aracılığıyla erişilir.

---

## Dizi Oluşturma

### 1. Boş Dizi

```javascript
const bosDizi = [];
```

### 2. Dizi Elemanları ile Birlikte

```javascript
const meyveler = ["Elma", "Armut", "Muz"];
```

### 3. `Array` Constructor Kullanarak

```javascript
const sayilar = new Array(1, 2, 3, 4);
const bosArray = new Array(5); // Uzunluğu 5 olan boş bir dizi
```

---

## Diziye Eleman Ekleme ve Çıkarma

### 1. Eleman Ekleme
- **Sonuna Eleman Eklemek (`push`)**
  ```javascript
  const meyveler = ["Elma", "Armut"];
  meyveler.push("Muz");
  console.log(meyveler); // ["Elma", "Armut", "Muz"]
  ```

- **Başa Eleman Eklemek (`unshift`)**
  ```javascript
  meyveler.unshift("Çilek");
  console.log(meyveler); // ["Çilek", "Elma", "Armut", "Muz"]
  ```

### 2. Eleman Çıkarma
- **Son Elemanı Çıkarmak (`pop`)**
  ```javascript
  meyveler.pop();
  console.log(meyveler); // ["Çilek", "Elma", "Armut"]
  ```

- **İlk Elemanı Çıkarmak (`shift`)**
  ```javascript
  meyveler.shift();
  console.log(meyveler); // ["Elma", "Armut"]
  ```

---

## Dizi Elemanlarına Erişim

### 1. Belirli Bir İndekse Erişim

```javascript
const meyveler = ["Elma", "Armut", "Muz"];
console.log(meyveler[0]); // "Elma"
console.log(meyveler[2]); // "Muz"
```

### 2. Dizi Uzunluğu

```javascript
console.log(meyveler.length); // 3
```

### 3. Son Eleman

```javascript
console.log(meyveler[meyveler.length - 1]); // "Muz"
```

---

## Dizi Üzerinde Döngüler

### 1. `for` Döngüsü

```javascript
for (let i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]);
}
```

### 2. `for...of` Döngüsü

```javascript
for (const meyve of meyveler) {
  console.log(meyve);
}
```

### 3. `forEach` Metodu

```javascript
meyveler.forEach((meyve, indeks) => {
  console.log(`${indeks}: ${meyve}`);
});
```

---

## Dizi Metotları

### 1. Dizi Birleştirme (`concat`)

```javascript
const dizi1 = [1, 2, 3];
const dizi2 = [4, 5, 6];
const birlesikDizi = dizi1.concat(dizi2);
console.log(birlesikDizi); // [1, 2, 3, 4, 5, 6]
```

### 2. Parçalama (`slice`)

```javascript
const parca = meyveler.slice(1, 3);
console.log(parca); // ["Armut", "Muz"]
```

### 3. Eleman Kaldırma/Ekleme (`splice`)

```javascript
meyveler.splice(1, 1, "Çilek", "Portakal");
console.log(meyveler); // ["Elma", "Çilek", "Portakal", "Muz"]
```

### 4. Ters Çevirme (`reverse`)

```javascript
meyveler.reverse();
console.log(meyveler); // ["Muz", "Portakal", "Çilek", "Elma"]
```

### 5. Sıralama (`sort`)

```javascript
const sayilar = [4, 2, 9, 1];
sayilar.sort((a, b) => a - b); // Küçükten büyüğe
console.log(sayilar); // [1, 2, 4, 9]
```

### 6. Dizi İçinde Arama (`indexOf`, `includes`)

```javascript
console.log(meyveler.indexOf("Çilek")); // 2
console.log(meyveler.includes("Muz")); // true
```

---

## ES6 ile Gelen Dizi Özellikleri

### 1. `map`

Her eleman üzerinde işlem yaparak yeni bir dizi oluşturur.

```javascript
const sayilar = [1, 2, 3, 4];
const kareler = sayilar.map(sayi => sayi ** 2);
console.log(kareler); // [1, 4, 9, 16]
```

### 2. `filter`

Belirli bir koşula uyan elemanları filtreler.

```javascript
const buyukSayilar = sayilar.filter(sayi => sayi > 2);
console.log(buyukSayilar); // [3, 4]
```

### 3. `reduce`

Diziyi bir değere indirger.

```javascript
const toplam = sayilar.reduce((birikim, sayi) => birikim + sayi, 0);
console.log(toplam); // 10
```

### 4. `find` ve `findIndex`

- **`find`:** İlk eşleşen elemanı döner.
- **`findIndex`:** İlk eşleşen elemanın indeksini döner.

```javascript
const ilkBuyuk = sayilar.find(sayi => sayi > 2);
console.log(ilkBuyuk); // 3

const ilkBuyukIndeks = sayilar.findIndex(sayi => sayi > 2);
console.log(ilkBuyukIndeks); // 2
```

### 5. `every` ve `some`

- **`every`:** Tüm elemanlar koşula uyuyorsa `true` döner.
- **`some`:** En az bir eleman koşula uyuyorsa `true` döner.

```javascript
console.log(sayilar.every(sayi => sayi > 0)); // true
console.log(sayilar.some(sayi => sayi > 3)); // true
```

### 6. `flat`

Çok boyutlu dizileri düzleştirir.

```javascript
const karmasikDizi = [1, [2, 3], [4, [5]]];
const duzDizi = karmasikDizi.flat(2);
console.log(duzDizi); // [1, 2, 3, 4, 5]
```

---

## Özet

JavaScript dizileri, güçlü metotları ve modern özellikleri ile esnek bir veri yapısı sunar. `map`, `filter`, `reduce` gibi ES6 ile gelen araçlar, diziler üzerinde daha etkili işlemler yapmamıza olanak tanır. Bu metotları kullanarak kodunuzu daha okunabilir ve kısa hale getirebilirsiniz.

Mutlu kodlamalar! 🚀
