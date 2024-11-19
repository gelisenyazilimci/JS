
# JavaScript Nesneler (Objects)

JavaScript'te nesneler (objects), birden fazla özelliği (property) ve metodu (method) bir arada depolayabilen veri yapılarıdır. Her bir özellik, anahtar (key) ve değer (value) çiftlerinden oluşur.

---

## Nesne Tanımlama

### 1. Obje Literali
```javascript
const kisi = {
    ad: "Ali",
    yas: 25,
    meslek: "Mühendis"
};
```

### 2. `Object` Constructor ile
```javascript
const kisi = new Object();
kisi.ad = "Ali";
kisi.yas = 25;
kisi.meslek = "Mühendis";
```

---

## Nesneye Erişim

### 1. Nokta Notasyonu
```javascript
console.log(kisi.ad); // Ali
console.log(kisi.yas); // 25
```

### 2. Köşeli Parantez Notasyonu
```javascript
console.log(kisi["ad"]); // Ali
console.log(kisi["yas"]); // 25
```

### Dinamik Anahtar Erişimi
```javascript
const anahtar = "meslek";
console.log(kisi[anahtar]); // Mühendis
```

---

## Nesne Metotları

### 1. `Object.keys()`
Nesnedeki tüm anahtarları döner.

```javascript
console.log(Object.keys(kisi)); // ["ad", "yas", "meslek"]
```

### 2. `Object.values()`
Nesnedeki tüm değerleri döner.

```javascript
console.log(Object.values(kisi)); // ["Ali", 25, "Mühendis"]
```

### 3. `Object.entries()`
Nesnedeki anahtar-değer çiftlerini bir dizi olarak döner.

```javascript
console.log(Object.entries(kisi));
// [["ad", "Ali"], ["yas", 25], ["meslek", "Mühendis"]]
```

### 4. `Object.assign()`
Birden fazla nesneyi birleştirir.

```javascript
const ekBilgi = { medeniDurum: "Bekar" };
const birlesik = Object.assign({}, kisi, ekBilgi);
console.log(birlesik);
// { ad: "Ali", yas: 25, meslek: "Mühendis", medeniDurum: "Bekar" }
```

### 5. `Object.freeze()`
Nesneyi dondurarak özelliklerinin değişmesini engeller.

```javascript
Object.freeze(kisi);
kisi.yas = 30; // Etkisiz
console.log(kisi.yas); // 25
```

### 6. `Object.seal()`
Nesneye yeni özellik eklenmesini engeller, ancak mevcut özellikler değiştirilebilir.

```javascript
Object.seal(kisi);
kisi.yas = 30; // Etkili
kisi.soyad = "Yılmaz"; // Etkisiz
console.log(kisi);
// { ad: "Ali", yas: 30, meslek: "Mühendis" }
```

---

## Nesne ile Döngü

### `for...in` Döngüsü
Bir nesnenin tüm anahtarları üzerinde döner.

```javascript
for (let anahtar in kisi) {
    console.log(`${anahtar}: ${kisi[anahtar]}`);
}
// Çıktı:
// ad: Ali
// yas: 25
// meslek: Mühendis
```

---

## Nesneye Özellik Ekleme ve Silme

### Özellik Ekleme
```javascript
kisi.soyad = "Yılmaz";
console.log(kisi.soyad); // Yılmaz
```

### Özellik Silme
```javascript
delete kisi.meslek;
console.log(kisi.meslek); // undefined
```

---

## Nesne Referansları

JavaScript'te nesneler referans tipi olarak saklanır. Bu nedenle bir nesne başka bir değişkene atandığında, bu iki değişken aynı referansa işaret eder.

```javascript
const nesne1 = { ad: "Ahmet" };
const nesne2 = nesne1;
nesne2.ad = "Mehmet";
console.log(nesne1.ad); // Mehmet
```

---

## Gömülü Nesne Özellikleri

### `this` Anahtar Kelimesi
Bir nesnenin kendi özelliklerine ve metodlarına erişmek için kullanılır.

```javascript
const araba = {
    marka: "Toyota",
    model: "Corolla",
    bilgileriGoster: function() {
        return `${this.marka} ${this.model}`;
    }
};

console.log(araba.bilgileriGoster()); // Toyota Corolla
```

---

## Nesne Avantajları

1. **Esnek Yapı:** Karmaşık veri modellerini kolayca temsil edebilir.
2. **Dinamik Özellikler:** Özellik eklemek veya kaldırmak kolaydır.
3. **Metot Desteği:** Fonksiyonları özellik olarak saklayabilir.

---

## Kaynaklar
- [MDN Web Docs: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- JavaScript resmi dokümantasyonu

---
