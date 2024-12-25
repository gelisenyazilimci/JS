# JavaScript: Map Nesnesi

Map, ES6 ile JavaScript'e eklenmiş, anahtar-değer çiftlerini saklamak için kullanılan bir veri yapısıdır. Map nesnesi, geleneksel nesnelerden (object) farklı olarak, anahtarların herhangi bir türde olmasına izin verir.

---

## Map'in Temel Özellikleri

1. **Anahtar Türü Özgürlüğü:** Map'teki anahtarlar herhangi bir türde olabilir (string, number, object, function, vb.).
2. **Sıralama:** Map, ekleme sırasını korur.
3. **Özelleşmiş Metotlar:** `set`, `get`, `has`, `delete`, `clear` gibi metotlarla kolay yönetim sağlar.

---

## Map Oluşturma

### Boş Bir Map Oluşturma

```javascript
const map = new Map();
```

### Başlangıç Değerleri ile Map Oluşturma

```javascript
const map = new Map([
  ["anahtar1", "değer1"],
  ["anahtar2", "değer2"]
]);

console.log(map); // Map(2) { 'anahtar1' => 'değer1', 'anahtar2' => 'değer2' }
```

---

## Map Metotları ve Özellikleri

### 1. `set` - Anahtar-Değer Eklemek

```javascript
const map = new Map();
map.set("isim", "Ahmet");
map.set(42, "yaş");
map.set(true, "boolean");

console.log(map);
// Map(3) { 'isim' => 'Ahmet', 42 => 'yaş', true => 'boolean' }
```

### 2. `get` - Değeri Alma

```javascript
console.log(map.get("isim")); // "Ahmet"
console.log(map.get(42));     // "yaş"
console.log(map.get(false));  // undefined
```

### 3. `has` - Anahtarın Varlığını Kontrol Etme

```javascript
console.log(map.has("isim")); // true
console.log(map.has("soyisim")); // false
```

### 4. `delete` - Anahtarı Silme

```javascript
map.delete(42);
console.log(map); // Map(2) { 'isim' => 'Ahmet', true => 'boolean' }
```

### 5. `clear` - Tüm Anahtarları Silme

```javascript
map.clear();
console.log(map); // Map(0) {}
```

### 6. `size` - Eleman Sayısını Öğrenme

```javascript
console.log(map.size); // 0
```

---

## Map Üzerinde Döngüler

Map nesneleri üzerinde kolayca döngü kurulabilir.

### 1. `for...of`

```javascript
const map = new Map([
  ["isim", "Ayşe"],
  ["yaş", 30],
  ["şehir", "Ankara"]
]);

for (const [anahtar, değer] of map) {
  console.log(`${anahtar}: ${değer}`);
}
// isim: Ayşe
// yaş: 30
// şehir: Ankara
```

### 2. `forEach`

```javascript
map.forEach((değer, anahtar) => {
  console.log(`${anahtar}: ${değer}`);
});
```

---

## Map ve Object Arasındaki Farklar

| **Özellik**               | **Map**                                | **Object**                         |
|---------------------------|----------------------------------------|------------------------------------|
| **Anahtar Türü**         | Herhangi bir tür (object, function, vb.) | Sadece string veya symbol         |
| **Sıralama**             | Ekleme sırasını korur                  | Sıralama garantisi yoktur         |
| **Boyut Bilgisi**        | `size` özelliği                        | Manuel olarak `Object.keys().length` gerekir |
| **Performans**           | Büyük veri setlerinde daha performanslı | Daha az optimize edilmiştir       |

---

## Map Kullanım Örnekleri

### 1. Nesne Anahtarı Kullanımı

```javascript
const objeAnahtarı = { id: 1 };
const map = new Map();
map.set(objeAnahtarı, "Değer");

console.log(map.get(objeAnahtarı)); // "Değer"
```

### 2. Fonksiyon Anahtarı Kullanımı

```javascript
const fonksiyonAnahtarı = () => {};
map.set(fonksiyonAnahtarı, "Fonksiyon Değeri");

console.log(map.get(fonksiyonAnahtarı)); // "Fonksiyon Değeri"
```

### 3. Belirli Bir Veriyi Saklama ve Hızlı Erişim

```javascript
const kullanıcılar = new Map([
  [1, "Ali"],
  [2, "Veli"],
  [3, "Fatma"]
]);

console.log(kullanıcılar.get(2)); // "Veli"
```

---

## Map ile İlgili İpuçları

1. **Dönüşüm:**
    - Map'i diziye dönüştürmek için:
      ```javascript
      const dizi = [...map];
      console.log(dizi);
      // [['isim', 'Ayşe'], ['yaş', 30], ['şehir', 'Ankara']]
      ```

    - Map'i nesneye dönüştürmek için:
      ```javascript
      const nesne = Object.fromEntries(map);
      console.log(nesne);
      // { isim: 'Ayşe', yaş: 30, şehir: 'Ankara' }
      ```

2. **Performans:**
   Büyük veri kümeleriyle çalışıyorsanız, `Map` kullanmak daha performanslıdır.

---

## Özet

- **Map Nedir?** Anahtar-değer çiftlerini saklamak için kullanılan güçlü bir veri yapısıdır.
- **Avantajları:** Anahtar türü özgürlüğü, sıralama garantisi, yüksek performans.
- **Metotları:** `set`, `get`, `has`, `delete`, `clear`, `size`.
- **Döngüler:** `for...of` ve `forEach` ile kolayca dolaşılabilir.

Map, esnekliği ve performansıyla modern JavaScript projelerinde sıkça kullanılan bir araçtır. Doğru senaryoda kullanıldığında, hem okunabilirliği artırır hem de karmaşıklığı azaltır.

