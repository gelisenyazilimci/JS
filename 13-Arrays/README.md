
# JavaScript Diziler (Arrays)

JavaScript'te diziler (arrays), birden fazla değeri sıralı bir şekilde depolamak için kullanılan veri yapılarıdır. Diziler, sıfır tabanlı indeksleme ile çalışır ve çeşitli yöntemlerle (metotlarla) işlenebilir.

---

## Dizi Tanımlama

### 1. Köşeli Parantezlerle
```javascript
const dizi = [1, 2, 3, 4, 5];
```

### 2. `Array` Constructor ile
```javascript
const dizi = new Array(1, 2, 3, 4, 5);
```

---

## Dizi Özellikleri

### 1. `length`
Bir dizideki eleman sayısını döner.

```javascript
const dizi = [1, 2, 3, 4, 5];
console.log(dizi.length); // 5
```

### 2. İndeksleme
Dizi elemanlarına sıfır tabanlı indeksleme ile erişilir.

```javascript
const dizi = ["elma", "armut", "çilek"];
console.log(dizi[0]); // elma
console.log(dizi[2]); // çilek
```

---

## Dizi Metotları

### 1. Eleman Ekleme ve Çıkarma

#### `push()`
Dizinin sonuna eleman ekler.

```javascript
const dizi = [1, 2, 3];
dizi.push(4);
console.log(dizi); // [1, 2, 3, 4]
```

#### `pop()`
Dizinin sonundaki elemanı çıkarır.

```javascript
const dizi = [1, 2, 3];
dizi.pop();
console.log(dizi); // [1, 2]
```

#### `unshift()`
Dizinin başına eleman ekler.

```javascript
const dizi = [1, 2, 3];
dizi.unshift(0);
console.log(dizi); // [0, 1, 2, 3]
```

#### `shift()`
Dizinin başındaki elemanı çıkarır.

```javascript
const dizi = [1, 2, 3];
dizi.shift();
console.log(dizi); // [2, 3]
```

### 2. Eleman Bulma

#### `indexOf()`
Bir elemanın dizideki ilk indeksini döner. Bulamazsa `-1` döner.

```javascript
const dizi = ["elma", "armut", "çilek"];
console.log(dizi.indexOf("armut")); // 1
```

#### `includes()`
Bir elemanın dizide olup olmadığını kontrol eder.

```javascript
const dizi = [1, 2, 3];
console.log(dizi.includes(2)); // true
```

### 3. Eleman Silme ve Değiştirme

#### `splice()`
Diziden eleman siler veya yeni elemanlar ekler.

```javascript
const dizi = [1, 2, 3, 4];
dizi.splice(1, 2); // 1. indeksten itibaren 2 eleman sil
console.log(dizi); // [1, 4]
```

#### `slice()`
Bir dizinin bir alt kümesini döner.

```javascript
const dizi = [1, 2, 3, 4];
const yeniDizi = dizi.slice(1, 3);
console.log(yeniDizi); // [2, 3]
```

### 4. Dizi Birleştirme ve Bölme

#### `concat()`
Birden fazla diziyi birleştirir.

```javascript
const dizi1 = [1, 2];
const dizi2 = [3, 4];
const birlesik = dizi1.concat(dizi2);
console.log(birlesik); // [1, 2, 3, 4]
```

#### `join()`
Dizi elemanlarını birleştirerek bir string oluşturur.

```javascript
const dizi = ["elma", "armut", "çilek"];
console.log(dizi.join(", ")); // "elma, armut, çilek"
```

### 5. Sıralama ve Ters Çevirme

#### `sort()`
Diziyi sıralar.

```javascript
const dizi = [3, 1, 4, 1, 5];
dizi.sort();
console.log(dizi); // [1, 1, 3, 4, 5]
```

#### `reverse()`
Diziyi ters çevirir.

```javascript
const dizi = [1, 2, 3];
dizi.reverse();
console.log(dizi); // [3, 2, 1]
```

### 6. Dizi Döngüleri

#### `forEach()`
Her bir eleman için verilen fonksiyonu çalıştırır.

```javascript
const dizi = [1, 2, 3];
dizi.forEach(eleman => console.log(eleman));
```

#### `map()`
Her bir eleman üzerinde işlem yaparak yeni bir dizi döner.

```javascript
const dizi = [1, 2, 3];
const kareler = dizi.map(eleman => eleman * eleman);
console.log(kareler); // [1, 4, 9]
```

#### `filter()`
Belirli bir koşula uyan elemanlardan yeni bir dizi oluşturur.

```javascript
const dizi = [1, 2, 3, 4];
const ciftler = dizi.filter(eleman => eleman % 2 === 0);
console.log(ciftler); // [2, 4]
```

#### `reduce()`
Diziyi tek bir değere indirger.

```javascript
const dizi = [1, 2, 3, 4];
const toplam = dizi.reduce((acc, eleman) => acc + eleman, 0);
console.log(toplam); // 10
```

---

## Dizi Avantajları

1. **Dinamik Yapı:** Diziler farklı türdeki verileri aynı anda depolayabilir.
2. **Güçlü Metotlar:** Çeşitli işlemleri kolayca yapmayı sağlar.
3. **Esnek Depolama:** Boyutları dinamik olarak değişebilir.

---

## Kaynaklar
- [MDN Web Docs: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- JavaScript resmi dokümantasyonu

---
