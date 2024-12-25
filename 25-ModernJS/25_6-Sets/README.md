# JavaScript: Set Nesnesi

Set, ES6 ile JavaScript'e eklenmiş, benzersiz (unique) değerleri saklamak için kullanılan bir veri yapısıdır. Set, aynı değeri birden fazla kez saklamaz ve ekleme sırasını korur.

---

## Set'in Temel Özellikleri

1. **Benzersizlik:** Set içerisindeki tüm değerler benzersizdir.
2. **Ekleme Sırası:** Değerler ekleme sırasına göre saklanır.
3. **Çeşitli Veri Türleri:** Set, herhangi bir veri türünü saklayabilir (string, number, object, vb.).

---

## Set Oluşturma

### Boş Bir Set Oluşturma

```javascript
const set = new Set();
```

### Başlangıç Değerleri ile Set Oluşturma

```javascript
const set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Set(4) { 1, 2, 3, 4 }
```

---

## Set Metotları ve Özellikleri

### 1. `add` - Değer Ekleme

```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Aynı değer eklenmez

console.log(set); // Set(2) { 1, 2 }
```

### 2. `delete` - Değer Silme

```javascript
set.delete(1);
console.log(set); // Set(1) { 2 }
```

### 3. `has` - Değerin Varlığını Kontrol Etme

```javascript
console.log(set.has(2)); // true
console.log(set.has(3)); // false
```

### 4. `clear` - Tüm Değerleri Silme

```javascript
set.clear();
console.log(set); // Set(0) {}
```

### 5. `size` - Eleman Sayısını Öğrenme

```javascript
console.log(set.size); // 0
```

---

## Set Üzerinde Döngüler

Set üzerinde döngü kurmak oldukça kolaydır.

### 1. `for...of`

```javascript
const set = new Set(["elma", "armut", "kiraz"]);
for (const değer of set) {
  console.log(değer);
}
// elma
// armut
// kiraz
```

### 2. `forEach`

```javascript
set.forEach(değer => {
  console.log(değer);
});
```

---

## Set Kullanım Örnekleri

### 1. Benzersiz Değerler Listesi

Set, bir dizideki benzersiz değerleri bulmak için kullanılabilir.

```javascript
const dizi = [1, 2, 2, 3, 4, 4, 5];
const benzersiz = new Set(dizi);
console.log([...benzersiz]); // [1, 2, 3, 4, 5]
```

### 2. Kesim (Intersection)

İki kümenin ortak elemanlarını bulmak için:

```javascript
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

const kesim = new Set([...set1].filter(x => set2.has(x)));
console.log(kesim); // Set(2) { 3, 4 }
```

### 3. Birleşim (Union)

İki kümenin birleşimini bulmak için:

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

const birleşim = new Set([...set1, ...set2]);
console.log(birleşim); // Set(5) { 1, 2, 3, 4, 5 }
```

### 4. Fark (Difference)

Bir kümenin diğerinden farkını bulmak için:

```javascript
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

const fark = new Set([...set1].filter(x => !set2.has(x)));
console.log(fark); // Set(2) { 1, 2 }
```

---

## Set ve Array Karşılaştırması

| **Özellik**            | **Set**                                | **Array**                          |
|-------------------------|----------------------------------------|-------------------------------------|
| **Benzersizlik**       | Tüm elemanlar benzersizdir             | Aynı eleman birden fazla kez olabilir |
| **Ekleme Sırası**      | Ekleme sırasını korur                  | Ekleme sırasını korur               |
| **Performans**         | Büyük veri setlerinde daha hızlıdır    | Daha az performanslıdır             |
| **Metotlar**           | `add`, `delete`, `has`, `clear`, vb.   | `push`, `pop`, `shift`, vb.         |

---

## Set ile İlgili İpuçları

1. **Dönüşüm:**
    - Set'i diziye dönüştürmek için:
      ```javascript
      const set = new Set([1, 2, 3]);
      const dizi = [...set];
      console.log(dizi); // [1, 2, 3]
      ```

    - Dizi veya diğer veri yapılarını Set'e dönüştürmek için:
      ```javascript
      const dizi = [1, 2, 3, 3, 4];
      const set = new Set(dizi);
      console.log(set); // Set(4) { 1, 2, 3, 4 }
      ```

2. **Performans Avantajı:**
   Benzersizlik garantisi gerektiğinde ve büyük veri setlerinde Set, dizilere kıyasla daha performanslıdır.

---

## Özet

- **Set Nedir?** Benzersiz değerleri saklayan bir veri yapısıdır.
- **Avantajları:** Benzersizlik, ekleme sırası koruma, çeşitli metotlar.
- **Metotlar:** `add`, `delete`, `has`, `clear`, `size`.
- **Kullanım Alanları:** Benzersiz değer listesi, küme işlemleri (kesim, birleşim, fark).

Set, JavaScript'te modern projelerde benzersiz verilerle çalışırken oldukça kullanışlıdır. Daha düzenli ve okunabilir kod yazmanızı sağlar.

Mutlu kodlamalar! 🚀
